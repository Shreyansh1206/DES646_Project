import tempfile
import json
import time
import numpy as np
from typing import Generator
import sys
import os
import warnings
import base64


# Validate Python version on module import
_py_version = sys.version_info
if _py_version < (3, 10):
    warnings.warn(
        f"Python {_py_version.major}.{_py_version.minor} detected. "
        "This project requires Python 3.10 or 3.11 for MediaPipe compatibility.",
        RuntimeWarning
    )
elif _py_version >= (3, 13):
    warnings.warn(
        f"Python {_py_version.major}.{_py_version.minor} detected. "
        "MediaPipe wheels may not be available for Python 3.13+. "
        "Please use Python 3.10 or 3.11 (see README).",
        RuntimeWarning
    )


def stream_feedback_for_video(video_path: str) -> Generator[str, None, None]:
    """Process a workout video and stream JSON events.

    Per-frame events include joint knee angle, rep count, state (up/down), 2D landmarks,
    and timestamps. After all frames, a final summary event is emitted containing:
    - final_label: predicted exercise class (or null if classification failed)
    - total_count: total repetition count
    - total_frames: number of frames processed
    - duration: total processing time seconds
    - feedback: list of 2-3 coaching sentences (may be empty if generation failed)
    - audio_base64: data URL of synthesized speech (or null if TTS unavailable)
    - classification_error: error string if classification raised an exception
    """
    # Add workspace root to sys.path for all top-level imports
    workspace_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '../..'))
    if workspace_root not in sys.path:
        sys.path.insert(0, workspace_root)
    
    # Import heavy modules lazily
    try:
        from Model.angleCalculator import angle3d, LEFT_HIP, LEFT_KNEE, LEFT_ANKLE, calculate_angles
        from Model.motionClassification.motionClassifier import predict_motion
        from Model.feedback import feedback as feedback_fn
        from Model.autoEncoder.Deadlift.model import posture_correctness_score as pcs_deadlift
        from Model.autoEncoder.Squat.model import posture_correctness_score as pcs_squat
        from Model.autoEncoder.Pull_Up.model import posture_correctness_score as pcs_pullup
        from Model.TTS import TTS as tts_generate
        import mediapipe as mp
        import cv2
        import numpy as _np
    except ImportError as e:
        err = {'error': f'Missing dependency: {e}. Please install required packages (see README).'}
        yield f"data: {json.dumps(err)}\n\n"
        return

    # Configure MediaPipe Pose
    mp_pose = mp.solutions.pose
    pose = mp_pose.Pose(static_image_mode=False, min_detection_confidence=0.5, min_tracking_confidence=0.5)

    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        err = {'error': f'Could not open video: {video_path}'}
        yield f"data: {json.dumps(err)}\n\n"
        return

    sequence_frames = []  # accumulate up to 60 frames of (33,3) for final prediction
    count = 0
    state = 'up'
    down_threshold = 90.0
    up_threshold = 140.0
    frame_index = 0
    start_time = time.time()
    fps = cap.get(cv2.CAP_PROP_FPS) or 30
    frame_interval = 1.0 / fps
    last_emit = time.time()

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = pose.process(frame_rgb)
        if not results.pose_landmarks:
            frame_index += 1
            continue

        landmarks = results.pose_landmarks.landmark
        # Collect xyz for sequence (limit 60 frames)
        xyz = [[lm.x, lm.y, lm.z] for lm in landmarks]
        if len(sequence_frames) < 60:
            sequence_frames.append(xyz)

        hip = np.array(xyz[LEFT_HIP])
        knee = np.array(xyz[LEFT_KNEE])
        ankle = np.array(xyz[LEFT_ANKLE])
        ang = angle3d(hip, knee, ankle)

        prev_state = state
        if state == 'up' and ang < down_threshold:
            state = 'down'
        elif state == 'down' and ang > up_threshold:
            state = 'up'
            count += 1

        lm2d = [[round(float(pt[0]),4), round(float(pt[1]),4)] for pt in xyz]
        payload = {
            'frame': frame_index,
            'knee_angle': float(ang),
            'count': count,
            'state': state,
            'landmarks': lm2d,
            'ts': round(time.time() - start_time, 3),
            'fps': fps
        }
        yield f"data: {json.dumps(payload)}\n\n"

        frame_index += 1
        # pace events roughly to video fps
        now = time.time()
        sleep_needed = frame_interval - (now - last_emit)
        if sleep_needed > 0:
            time.sleep(min(sleep_needed, 0.05))
        last_emit = time.time()

    cap.release()
    pose.close()

    # Prepare sequence (60,33,3) for prediction: pad if fewer frames
    sequence = np.array(sequence_frames)
    if sequence.shape[0] < 60:
        pad = np.zeros((60 - sequence.shape[0], len(sequence_frames[0]), 3)) if sequence_frames else np.zeros((60,33,3))
        sequence = np.concatenate((sequence, pad), axis=0)
    elif sequence.shape[0] > 60:
        sequence = sequence[:60]

    # Classification
    try:
        predicted = predict_motion(sequence)
    except Exception as e:
        predicted = None
        classification_error = str(e)
    else:
        classification_error = None

    # Build feedback + TTS only if classification succeeded and sequence has data
    feedback_list = []
    audio_b64 = None
    try:
        if predicted in {"Deadlift", "Squat", "Pull-Up"} and sequence.any():
            # Load reference JSONs
            try:
                ref_scores_path = os.path.join(workspace_root, 'Model', 'referenceValues', 'reference_scores.json')
                ref_angles_path = os.path.join(workspace_root, 'Model', 'referenceValues', 'reference_angles.json')
                with open(ref_scores_path, 'r') as f: reference_scores = json.load(f)
                with open(ref_angles_path, 'r') as f: reference_angles = json.load(f)
            except Exception as e:
                reference_scores = {}
                reference_angles = {}
                print(f"[inference] Failed loading reference values: {e}")

            # Angle sets required per motion
            if predicted == 'Deadlift':
                required_angles = calculate_angles(sequence, ['torso', 'knee', 'hip'])
                scores = pcs_deadlift(sequence)
                ref_score_bucket = reference_scores.get('Deadlift_scores', {})
                ref_angle_bucket = reference_angles.get('Deadlift_references', {})
                needed_devs = ['torso','knee','hip']
            elif predicted == 'Squat':
                required_angles = calculate_angles(sequence, ['torso', 'knee', 'hip'])
                scores = pcs_squat(sequence)
                ref_score_bucket = reference_scores.get('Squat_scores', {})
                ref_angle_bucket = reference_angles.get('Squat_references', {})
                needed_devs = ['torso','knee','hip']
            else:  # Pull-Up
                required_angles = calculate_angles(sequence, ['torso', 'elbow', 'shoulder'])
                scores = pcs_pullup(sequence)
                ref_score_bucket = reference_scores.get('Pull_Up_scores', {})
                ref_angle_bucket = reference_angles.get('Pull-Up_references', {})
                needed_devs = ['torso','elbow','shoulder']

            try:
                min_net = ref_score_bucket.get('min_net_loss', 1.0)
                max_net = ref_score_bucket.get('max_net_loss', 1.0)
                net_score = (1 - (scores['loss'] - min_net)/(1.69*max_net - min_net)) * 100
            except Exception:
                net_score = 0.0

            # Jointwise scores
            jointwise_loss = scores.get('jointwise_loss', [])
            jointwise_score = []
            for i, jloss in enumerate(jointwise_loss):
                try:
                    mn = ref_score_bucket.get('min_jointwise_loss', [0]*33)[i]
                    mx = ref_score_bucket.get('max_jointwise_loss', [1]*33)[i]
                    jscore = (1 - (jloss - mn)/(1.69*mx - mn)) * 100
                except Exception:
                    jscore = 0.0
                jointwise_score.append(jscore)

            # Angle deviations
            angle_deviations = {}
            for part in needed_devs:
                try:
                    mean, mx, mn = required_angles[part]
                    angle_deviations[f'mean_{part}_dev'] = mean - ref_angle_bucket.get(f'mean_{part}', 0)
                    angle_deviations[f'max_{part}_dev'] = mx - ref_angle_bucket.get(f'max_{part}', 0)
                    angle_deviations[f'min_{part}_dev'] = mn - ref_angle_bucket.get(f'min_{part}', 0)
                except Exception:
                    continue

            # Map jointwise indices to names (same order as main.py)
            joint_names = [
                "nose","left_eye_inner","left_eye","left_eye_outer","right_eye_inner","right_eye","right_eye_outer",
                "left_ear","right_ear","mouth_left","mouth_right","left_shoulder","right_shoulder","left_elbow","right_elbow",
                "left_wrist","right_wrist","left_pinky","right_pinky","left_index","right_index","left_thumb","right_thumb",
                "left_hip","right_hip","left_knee","right_knee","left_ankle","right_ankle","left_heel","right_heel",
                "left_foot_index","right_foot_index"
            ]
            joint_scores_dict = {jn: jointwise_score[i] if i < len(jointwise_score) else 0.0 for i, jn in enumerate(joint_names)}

            feedback_input = {
                'exercise': predicted.lower(),
                'net_score': net_score,
                'jointwise_score': joint_scores_dict,
                'angle_deviations': angle_deviations
            }
            # feedback_fn returns JSON array string
            try:
                fb_json_str = feedback_fn(feedback_input)
                feedback_list = json.loads(fb_json_str)
            except Exception as e:
                print(f"[inference] feedback generation failed: {e}")
                feedback_list = []

            # Generate TTS once (concatenate sentences)
            if feedback_list:
                full_text = '. '.join(feedback_list)
                try:
                    audio_path = tts_generate(full_text)
                    with open(audio_path, 'rb') as f:
                        raw = f.read()
                    # Guess mime
                    ext = os.path.splitext(audio_path)[1].lower()
                    mime = 'audio/mpeg' if ext == '.mp3' else 'audio/wav'
                    audio_b64 = f"data:{mime};base64," + base64.b64encode(raw).decode('utf-8')
                except Exception as e:
                    print(f"[inference] TTS generation failed: {e}")
                    audio_b64 = None
    except Exception as e:
        print(f"[inference] Unexpected feedback/TTS error: {e}")
        feedback_list = []
        audio_b64 = None

    final = {
        'final_label': predicted,
        'classification_error': classification_error,
        'total_count': count,
        'total_frames': frame_index,
        'duration': round(time.time() - start_time, 3),
        'feedback': feedback_list,
        'audio_base64': audio_b64
    }
    yield f"data: {json.dumps(final)}\n\n"
