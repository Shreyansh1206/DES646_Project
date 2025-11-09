import numpy as np
import cv2
import mediapipe as mp
import sys
import os

MAX_FRAMES = 60
NUM_KEYPOINTS = 33
KEYPOINT_DIM = 2
INPUT_SIZE = NUM_KEYPOINTS * KEYPOINT_DIM
RESOLUTION = (640, 360)
FPS = 30

mp_pose = mp.solutions.pose
pose = mp_pose.Pose(static_image_mode=False, min_detection_confidence=0.5, min_tracking_confidence=0.5)

def standardize_video(input_path, output_path, resolution=(640, 360), fps=30):
    """Standardize video using OpenCV instead of ffmpeg for better portability."""
    width, height = resolution
    
    # Open input video
    cap = cv2.VideoCapture(input_path)
    if not cap.isOpened():
        raise ValueError(f"Could not open video: {input_path}")
    
    # Get original properties
    orig_fps = cap.get(cv2.CAP_PROP_FPS)
    orig_width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    orig_height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    
    # Calculate frame sampling rate to achieve target fps
    frame_skip = max(1, int(orig_fps / fps))
    
    # Calculate scaled dimensions maintaining aspect ratio
    scale = min(width / orig_width, height / orig_height)
    scaled_width = int(orig_width * scale)
    scaled_height = int(orig_height * scale)
    
    # Calculate padding
    pad_x = (width - scaled_width) // 2
    pad_y = (height - scaled_height) // 2
    
    # Setup video writer
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))
    
    frame_count = 0
    try:
        while True:
            ret, frame = cap.read()
            if not ret:
                break
            
            # Sample frames to match target fps
            if frame_count % frame_skip == 0:
                # Resize maintaining aspect ratio
                resized = cv2.resize(frame, (scaled_width, scaled_height))
                
                # Create padded frame (black background)
                padded = np.zeros((height, width, 3), dtype=np.uint8)
                padded[pad_y:pad_y+scaled_height, pad_x:pad_x+scaled_width] = resized
                
                out.write(padded)
            
            frame_count += 1
    finally:
        cap.release()
        out.release()

def process_clip_3d(video_path):
    """Extract 3D pose keypoints for each frame using MediaPipe.

    Returns a (60, 33, 3) numpy array padded or truncated to MAX_FRAMES.
    Raises ValueError if no pose landmarks are detected in any frame.
    """
    cap = cv2.VideoCapture(video_path)
    keypoint_sequence = []

    try:
        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                break

            frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            results = pose.process(frame_rgb)
            if results.pose_landmarks:
                landmarks = results.pose_landmarks.landmark
                keypoints = [[lm.x, lm.y, lm.z] for lm in landmarks]
                keypoint_sequence.append(np.array(keypoints))  # (33, 3)
    finally:
        cap.release()

    if len(keypoint_sequence) == 0:
        # Do NOT sys.exit inside a server context; raise so caller can handle.
        raise ValueError(f"No valid frames with keypoints found in video: {video_path}")

    sequence = np.array(keypoint_sequence)  # shape: (T, 33, 3)
    T = sequence.shape[0]

    if T > MAX_FRAMES:
        sequence = sequence[:MAX_FRAMES]
    elif T < MAX_FRAMES:
        pad = np.zeros((MAX_FRAMES - T, NUM_KEYPOINTS, 3))
        sequence = np.concatenate((sequence, pad), axis=0)

    return sequence  # shape: (60, 33, 3)

def sequence_from_videopath(video_path):
    """Full pipeline: standardize raw video then extract pose sequence.

    Raises ValueError with a human-friendly message if processing fails.
    """
    temp_path = "Input_Video/temp.mp4"
    try:
        standardize_video(video_path, temp_path, RESOLUTION, FPS)
        sequence = process_clip_3d(temp_path)
        return sequence
    except Exception as e:
        raise ValueError(f"Failed to process video: {e}") from e
    finally:
        if os.path.exists(temp_path):
            try:
                os.remove(temp_path)
            except Exception:
                pass