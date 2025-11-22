import json
import time
import numpy as np
from typing import Generator
import sys
import os


def stream_feedback_for_video(video_path: str) -> Generator[str, None, None]:
    """Process video and yield Server-Sent Events (text/event-stream) lines as JSON strings.

    Yields lines formatted as: 'data: {json}\n\n'
    The consumer can parse each JSON chunk.
    """
    # Add workspace root to sys.path for all top-level imports
    workspace_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
    if workspace_root not in sys.path:
        sys.path.insert(0, workspace_root)

    # Import heavy project modules lazily so Django can start without heavy deps installed
    try:
        from Model.preProcessing import sequence_from_videopath
        from Model.angleCalculator import angle3d, calculate_angles, LEFT_HIP, LEFT_KNEE, LEFT_ANKLE
        from Model.motionClassification.motionClassifier import predict_motion
        from Model.autoEncoder.Deadlift.model import posture_correctness_score as pcs_deadlift
        from Model.autoEncoder.Squat.model import posture_correctness_score as pcs_squat
        from Model.autoEncoder.Pull_Up.model import posture_correctness_score as pcs_pullup
        from Model.feedback import feedback as feedback_fn
        # from Model.TTS import TTS  # Optional: server-side audio (not used in SSE)
    except ImportError as e:
        err = {'error': f'Missing dependency: {e}. Please install required packages (see README).'}
        yield f"data: {json.dumps(err)}\n\n"
        return

    # Load reference values for scoring
    try:
        with open(os.path.join(workspace_root, 'Model/referenceValues/reference_scores.json'), 'r') as f:
            reference_scores = json.load(f)
        with open(os.path.join(workspace_root, 'Model/referenceValues/reference_angles.json'), 'r') as f:
            reference_angles = json.load(f)
    except Exception as e:
        err = {'error': f'Failed to load reference values: {e}'}
        yield f"data: {json.dumps(err)}\n\n"
        return

    # Get standardized keypoint sequence (60,33,3)
    try:
        sequence = sequence_from_videopath(video_path)
    except Exception as e:
        err = {'error': f'Video preprocessing failed: {str(e)}'}
        yield f"data: {json.dumps(err)}\n\n"
        return

    # Compute per-frame knee angle for real-time updates
    frame_angles = []
    for frame in sequence:
        hip = np.array(frame[LEFT_HIP])
        knee = np.array(frame[LEFT_KNEE])
        ankle = np.array(frame[LEFT_ANKLE])
        a = angle3d(hip, knee, ankle)
        frame_angles.append(a)

    # Simple repetition counter heuristic using knee angle thresholds
    count = 0
    state = 'up'
    down_threshold = 90.0
    up_threshold = 140.0

    for idx, ang in enumerate(frame_angles):
        if state == 'up' and ang < down_threshold:
            state = 'down'
        elif state == 'down' and ang > up_threshold:
            state = 'up'
            count += 1

        payload = {'frame': idx, 'knee_angle': float(ang), 'count': count, 'state': state}
        yield f"data: {json.dumps(payload)}\n\n"
        time.sleep(0.01)

    # Predict exercise type
    try:
        predicted = predict_motion(sequence)
    except Exception:
        predicted = None

    # Calculate scores and generate feedback
    import traceback
    net_score = 0
    feedback_array = []
    debug_log = []

    try:
        debug_log.append(f"Predicted exercise: {predicted}")
        # Determine which angles to compute per exercise
        if predicted in ["Deadlift", "Squat"]:
            required_angles = calculate_angles(sequence, ['torso', 'knee', 'hip'])
        elif predicted == 'Pull-Up':
            required_angles = calculate_angles(sequence, ['torso', 'elbow', 'shoulder'])
        else:
            required_angles = None

        debug_log.append(f"Required angles: {required_angles}")

        if predicted and required_angles:
            try:
                if predicted == "Deadlift":
                    scores = pcs_deadlift(sequence)
                    ref_key = 'Deadlift_scores'
                    angle_key = 'Deadlift_references'
                    angle_names = ['torso', 'knee', 'hip']
                elif predicted == 'Pull-Up':
                    scores = pcs_pullup(sequence)
                    ref_key = 'Pull_Up_scores'
                    angle_key = 'Pull-Up_references'
                    angle_names = ['torso', 'elbow', 'shoulder']
                elif predicted == 'Squat':
                    scores = pcs_squat(sequence)
                    ref_key = 'Squat_scores'
                    angle_key = 'Squat_references'
                    angle_names = ['torso', 'knee', 'hip']
                debug_log.append(f"Scores: {scores}")
                debug_log.append(f"Reference scores: {reference_scores[ref_key]}")
                net_score = (
                    1 - (scores['loss'] - reference_scores[ref_key]['min_net_loss']) /
                    (1.69 * reference_scores[ref_key]['max_net_loss'] - reference_scores[ref_key]['min_net_loss'])
                ) * 100
                debug_log.append(f"Net score calculation: loss={scores['loss']}, min_net_loss={reference_scores[ref_key]['min_net_loss']}, max_net_loss={reference_scores[ref_key]['max_net_loss']}, net_score={net_score}")

                jointwise_score = np.zeros(33)
                for i in range(len(scores['jointwise_loss'])):
                    jointwise_score[i] = (
                        1 - (scores['jointwise_loss'][i] - reference_scores[ref_key]['min_jointwise_loss'][i]) /
                        (1.69 * reference_scores[ref_key]['max_jointwise_loss'][i] - reference_scores[ref_key]['min_jointwise_loss'][i])
                    ) * 100
                debug_log.append(f"Jointwise scores: {jointwise_score}")

                angle_devs = {}
                for name in angle_names:
                    angle_devs[f'mean_{name}_dev'] = required_angles[name][0] - reference_angles[angle_key][f'mean_{name}']
                    angle_devs[f'max_{name}_dev'] = required_angles[name][1] - reference_angles[angle_key][f'max_{name}']
                    angle_devs[f'min_{name}_dev'] = required_angles[name][2] - reference_angles[angle_key][f'min_{name}']
                debug_log.append(f"Angle deviations: {angle_devs}")

                joint_names = [
                    "nose", "left_eye_inner", "left_eye", "left_eye_outer", "right_eye_inner", "right_eye",
                    "right_eye_outer", "left_ear", "right_ear", "mouth_left", "mouth_right", "left_shoulder",
                    "right_shoulder", "left_elbow", "right_elbow", "left_wrist", "right_wrist", "left_pinky",
                    "right_pinky", "left_index", "right_index", "left_thumb", "right_thumb", "left_hip",
                    "right_hip", "left_knee", "right_knee", "left_ankle", "right_ankle", "left_heel",
                    "right_heel", "left_foot_index", "right_foot_index"
                ]

                input_dic = str({
                    'exercise': predicted.lower(),
                    'net_score': float(net_score),
                    'jointwise_score': dict(zip(joint_names, [float(x) for x in jointwise_score])),
                    'angle_deviations': {k: float(v) for k, v in angle_devs.items()},
                })
                debug_log.append(f"Input dict for feedback: {input_dic}")

                import json as _json
                import ast
                text_feedback = feedback_fn(input_dic).strip()
                debug_log.append(f"Raw feedback: {text_feedback}")
                try:
                    feedback_array = _json.loads(text_feedback)
                    if not isinstance(feedback_array, list):
                        feedback_array = [str(feedback_array)]
                except Exception:
                    try:
                        feedback_array = ast.literal_eval(text_feedback)
                        if not isinstance(feedback_array, list):
                            feedback_array = [str(feedback_array)]
                    except Exception:
                        feedback_array = [text_feedback]
            except Exception as e:
                debug_log.append(f"Exception in scoring/feedback: {traceback.format_exc()}")
                feedback_array = [f"Error generating feedback: {str(e)}"]
                net_score = 0
        else:
            debug_log.append("Could not determine exercise type or required angles.")
            feedback_array = ["Could not determine exercise type from the video."]

    except Exception as e:
        debug_log.append(f"Exception in main scoring block: {traceback.format_exc()}")
        feedback_array = [f"Error generating feedback: {str(e)}"]
        net_score = 0

    final = {
        'final_label': predicted,
        'total_count': count,
        'score': round(float(net_score), 2),
        'feedback': feedback_array,
        'debug_log': debug_log,
    }
    yield f"data: {json.dumps(final)}\n\n"
