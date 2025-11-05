import cv2
import mediapipe as mp
import numpy as np
import sys

MAX_FRAMES = 60
NUM_KEYPOINTS = 33
KEYPOINT_DIM = 2

LEFT_SHOULDER = 11
LEFT_HIP = 23
LEFT_KNEE = 25
LEFT_ANKLE = 27

mp_pose = mp.solutions.pose
pose = mp_pose.Pose(static_image_mode=False, min_detection_confidence=0.5, min_tracking_confidence=0.5)
PoseLandmark = mp_pose.PoseLandmark

def angle3d(a, b, c):
    # a, b, c: np.array of shape (3,)
    ba = a - b
    bc = c - b
    cosine_angle = np.dot(ba, bc) / (np.linalg.norm(ba) * np.linalg.norm(bc))
    angle = np.arccos(np.clip(cosine_angle, -1.0, 1.0))
    return np.degrees(angle)

def torso_angles3d(sequence):
    torso_angles = []
    for frame in sequence:
        shoulder = frame[LEFT_SHOULDER]
        hip = frame[LEFT_HIP]
        vertical_ref = [hip[0], 1, hip[2]]

        torso_angles.append(angle3d(shoulder, hip, vertical_ref))
    
    # print(torso_angles)
    return [np.mean(torso_angles), np.max(torso_angles), np.min(torso_angles)]

def hip_angles3d(sequence):
    hip_angles = []
    for frame in sequence:
        shoulder = frame[LEFT_SHOULDER]
        hip = frame[LEFT_HIP]
        knee = frame[LEFT_KNEE]

        hip_angles.append(angle3d(shoulder, hip, knee))
    
    return [np.mean(hip_angles), np.max(hip_angles), np.min(hip_angles)]

def knee_angles3d(sequence):
    knee_angles = []
    for frame in sequence:
        hip = frame[LEFT_HIP]
        knee = frame[LEFT_KNEE]
        ankle = frame[LEFT_ANKLE]

        knee_angles.append(angle3d(hip, knee, ankle))
    
    return [np.mean(knee_angles), np.max(knee_angles), np.min(knee_angles)]

def calculate_angles(sequence, angle_types):

    angles = {}
    for angle_type in angle_types:
        if(angle_type == "torso"):
            angles['torso'] = torso_angles3d(sequence)
        if(angle_type == "knee"):
            angles['knee'] = knee_angles3d(sequence)
        if(angle_type == "hip"):
            angles['hip'] = hip_angles3d(sequence)

    return angles

        