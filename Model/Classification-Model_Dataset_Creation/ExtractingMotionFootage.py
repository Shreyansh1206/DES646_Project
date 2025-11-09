import numpy as np
import cv2
import mediapipe as mp
from moviepy.video.io import VideoFileClip
import os

MOTION_THRESHOLD = 5
MIN_CONSECUTIVE_FRAMES = 15
KEYPOINT_VISIBILITY_THRESHOLD = 0.5
MAX_SEGMENTS = 5

mp_pose = mp.solutions.pose
pose = mp_pose.Pose(static_image_mode = False, min_detection_confidence = 0.5, min_tracking_confidence = 0.5)

def extract_keypoints(image):
    rgb_frame = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    rotated_frame = cv2.rotate(rgb_frame, cv2.ROTATE_90_CLOCKWISE)
    results = pose.process(rotated_frame)
    if results.pose_landmarks:
        keypoints = []
        for landmark in results.pose_landmarks.landmark:
            if landmark.visibility < 0.5:
                return None
            keypoints.append((landmark.x, landmark.y))
        return np.array(keypoints)
    return None

def get_motion_scores(video_path):
    cap = cv2.VideoCapture(video_path)
    motion_scores = []
    valid_frames = []

    prev_keypoints = None
    frame_idx = 0

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        keypoints = extract_keypoints(frame)
        if keypoints is None:
            motion_scores.append(0)
            valid_frames.append(False)
            prev_keypoints = None
        else:
            valid_frames.append(True)
            if prev_keypoints is not None:
                motion = np.linalg.norm(keypoints - prev_keypoints)
                motion_scores.append(motion)
            else:
                motion_scores.append(0)
            prev_keypoints = keypoints

        frame_idx += 1
    cap.release()
    return np.array(motion_scores), np.array(valid_frames)

def find_motion_segments(motion_scores, valid_frames, fps):
    high_motion = (motion_scores > MOTION_THRESHOLD) and valid_frames
    segments = []
    start = None

    for i, is_high in enumerate(high_motion):
        if is_high:
            if start is None:
                start = i
        else:
            if start is not None and i-start>=MIN_CONSECUTIVE_FRAMES:
                segments.append((start,i))
            start = None

        if start is not None and len(motion_scores) - start >=MIN_CONSECUTIVE_FRAMES:
            segments.append((start, len(motion_scores)))

        return [(start/fps, end/fps, start, end) for start, end in segments]
    
def extract_video_segment(input_path, output_path, start_time, end_time):
    clip = VideoFileClip(input_path)
    clip.subclip(start_time, end_time).write_videofile(output_path, codec='libx264', audio=False, verbose=False, logger=None)

def extract_all_segments(video_path, output_dir, fps=30):
    os.makedirs(output_dir, exist_ok = True)

    motion_scores, valid_frames = get_motion_scores(video_path)
    segments = find_motion_segments(motion_scores, valid_frames, fps)
    print(valid_frames)
    print("lol")

    if not segments:
        print("No Valid stroke segments detected!!")
        return
    
    for idx, (start_time, end_time, start_frame, end_frame) in enumerate(segments[:MAX_SEGMENTS]):
        print(f"Saving segment {idx+1}: {start_time:.2f}s to {end_time:.2f}s")

        seg_name = f"segment_{idx+1}"
        video_out = os.path.join(output_dir, f"{seg_name}.mp4")

        extract_video_segment(video_path, video_out, start_time, end_time)

        print(f"\n Extracted {min(len(segments), MAX_SEGMENTS)} segment(s)")


extract_all_segments("processed_downloaded_videos\Squat_0_the_perfect_squat__5_steps_.mp4", "Output_segments", fps = 30)
