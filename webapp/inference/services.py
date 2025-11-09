import tempfile
import json
import time
import numpy as np
from typing import Generator
import sys
import warnings


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
    """Process video and yield Server-Sent Events (text/event-stream) lines as JSON strings.

    Yields lines formatted as: 'data: {json}\n\n'
    The consumer can parse each JSON chunk.
    """
    # Import heavy modules lazily
    try:
        import cv2
        import mediapipe as mp
        from angleCalculator import angle3d, LEFT_HIP, LEFT_KNEE, LEFT_ANKLE
        from motionClassification.motionClassifier import predict_motion
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

    try:
        predicted = predict_motion(sequence)
    except Exception:
        predicted = None

    final = {'final_label': predicted, 'total_count': count, 'total_frames': frame_index, 'duration': round(time.time() - start_time, 3)}
    yield f"data: {json.dumps(final)}\n\n"
