import tempfile
import json
import time
import numpy as np
from typing import Generator


def stream_feedback_for_video(video_path: str) -> Generator[str, None, None]:
    """Process video and yield Server-Sent Events (text/event-stream) lines as JSON strings.

    Yields lines formatted as: 'data: {json}\n\n'
    The consumer can parse each JSON chunk.
    """
    # Import heavy project modules lazily so Django can start without heavy deps installed
    try:
        from preProcessing import sequence_from_videopath
        from angleCalculator import angle3d, LEFT_HIP, LEFT_KNEE, LEFT_ANKLE
        from motionClassification.motionClassifier import predict_motion
    except ImportError as e:
        # Yield a single SSE message describing the missing dependency and stop
        err = {'error': f'Missing dependency: {e}. Please install required packages (see README).'}
        yield f"data: {json.dumps(err)}\n\n"
        return

    # Get standardized keypoint sequence (60,33,3)
    sequence = sequence_from_videopath(video_path)

    # Compute per-frame knee angle
    frame_angles = []
    for frame in sequence:
        hip = np.array(frame[LEFT_HIP])
        knee = np.array(frame[LEFT_KNEE])
        ankle = np.array(frame[LEFT_ANKLE])
        a = angle3d(hip, knee, ankle)
        frame_angles.append(a)

    # Simple repetition counter heuristic using knee angle thresholds
    count = 0
    state = 'up'  # either 'up' or 'down'
    down_threshold = 90.0
    up_threshold = 140.0

    for idx, ang in enumerate(frame_angles):
        prev_state = state
        if state == 'up' and ang < down_threshold:
            state = 'down'
        elif state == 'down' and ang > up_threshold:
            state = 'up'
            count += 1

        payload = {
            'frame': idx,
            'knee_angle': float(ang),
            'count': count,
            'state': state,
        }
        yield f"data: {json.dumps(payload)}\n\n"
        time.sleep(0.01)

    # final prediction for the whole clip
    try:
        predicted = predict_motion(sequence)
    except Exception:
        predicted = None

    final = {'final_label': predicted, 'total_count': count}
    yield f"data: {json.dumps(final)}\n\n"
