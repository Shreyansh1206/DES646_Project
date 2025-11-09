import numpy as np
import cv2
import mediapipe as mp
import subprocess
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
    width, height = resolution
    cmd = [
        'ffmpeg',
        '-y',
        '-i', input_path,
        '-vf', f'fps={fps},scale={width}:{height}:force_original_aspect_ratio=decrease,pad={width}:{height}:(ow-iw)/2:(oh-ih)/2',
        '-c:v', 'libx264',
        '-preset', 'fast',
        '-crf', '23',
        '-c:a', 'aac',
        '-strict', '-2',
        output_path
    ]
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

def process_clip_3d(video_path):
    cap = cv2.VideoCapture(video_path)
    keypoint_sequence = []

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

    cap.release()

    if len(keypoint_sequence) == 0:
        print("Error: No valid frames with keypoints found.")
        sys.exit(1)

    sequence = np.array(keypoint_sequence)  # shape: (T, 33, 3)
    T = sequence.shape[0]

    if T > MAX_FRAMES:
        sequence = sequence[:MAX_FRAMES]
    elif T < MAX_FRAMES:
        pad = np.zeros((MAX_FRAMES - T, NUM_KEYPOINTS, 3))
        sequence = np.concatenate((sequence, pad), axis=0)

    return sequence  # shape: (60, 33, 3)

def sequence_from_videopath(video_path):
    temp_path = "Input_Video/temp.mp4"
    standardize_video(video_path, temp_path, RESOLUTION, FPS)
    sequence = process_clip_3d(temp_path)
    os.remove(temp_path)

    return sequence