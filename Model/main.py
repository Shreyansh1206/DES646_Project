import sys
import os

# Add parent directory to path when run as script
if __name__ == "__main__":
    sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from Model.motionClassification.motionClassifier import predict_motion
from Model.angleCalculator import calculate_angles
from Model.autoEncoder.Deadlift.model import posture_correctness_score as pcs_deadlift
from Model.autoEncoder.Squat.model import posture_correctness_score as pcs_squat
from Model.autoEncoder.Pull_Up.model import posture_correctness_score as pcs_pullup
from Model.feedback import feedback

from Model.preProcessing import sequence_from_videopath
import json
import ast
import numpy as np
from Model.TTS import TTS

if __name__ == "__main__":
    video_path = "Input_Video/Deadlift_9.mp4"
    sequence = sequence_from_videopath(video_path) #(60,33,3)
    motion = predict_motion(sequence)
    print(f"The exercise is a {motion}\n")

    # loading reference values
    with open('referenceValues/reference_scores.json', 'r') as f:
        reference_scores = json.load(f)
    with open('referenceValues/reference_angles.json', 'r') as f:
        reference_angles = json.load(f)

    if(motion == "Deadlift"):
        required_angles = calculate_angles(sequence, ['torso', 'knee', 'hip'])
        deadlift_scores = pcs_deadlift(sequence)

        # calculating devations
        
        net_score = (1 - (deadlift_scores['loss'] - reference_scores['Deadlift_scores']['min_net_loss'])/(1.69*reference_scores['Deadlift_scores']['max_net_loss'] - reference_scores['Deadlift_scores']['min_net_loss']))*100

        jointwise_score = np.zeros(33)
        for i in range(len(deadlift_scores['jointwise_loss'])):
            jointwise_score[i] = (1 - (deadlift_scores['jointwise_loss'][i] - reference_scores['Deadlift_scores']['min_jointwise_loss'][i])/(1.69*reference_scores['Deadlift_scores']['max_jointwise_loss'][i] - reference_scores['Deadlift_scores']['min_jointwise_loss'][i]))*100

        mean_torso_dev = required_angles['torso'][0] - reference_angles['Deadlift_references']['mean_torso']
        max_torso_dev = required_angles['torso'][1] - reference_angles['Deadlift_references']['max_torso']
        min_torso_dev = required_angles['torso'][2] - reference_angles['Deadlift_references']['min_torso']
        mean_knee_dev = required_angles['knee'][0] - reference_angles['Deadlift_references']['mean_knee']
        max_knee_dev =  required_angles['knee'][1] - reference_angles['Deadlift_references']['max_knee']
        min_knee_dev = required_angles['knee'][2] - reference_angles['Deadlift_references']['min_knee']
        mean_hip_dev = required_angles['hip'][0] - reference_angles['Deadlift_references']['mean_hip']
        max_hip_dev = required_angles['hip'][1] - reference_angles['Deadlift_references']['max_hip']
        min_hip_dev = required_angles['hip'][2] - reference_angles['Deadlift_references']['min_hip']

        input_dic = str({'exercise': 'deadlift', 'net_score': net_score, 'jointwise_score': {
        "nose": jointwise_score[0],
        "left_eye_inner": jointwise_score[1],
        "left_eye": jointwise_score[2],
        "left_eye_outer": jointwise_score[3],
        "right_eye_inner": jointwise_score[4],
        "right_eye": jointwise_score[5],
        "right_eye_outer": jointwise_score[6],
        "left_ear": jointwise_score[7],
        "right_ear": jointwise_score[8],
        "mouth_left": jointwise_score[9],
        "mouth_right": jointwise_score[10],
        "left_shoulder": jointwise_score[11],
        "right_shoulder": jointwise_score[12],
        "left_elbow": jointwise_score[13],
        "right_elbow": jointwise_score[14],
        "left_wrist": jointwise_score[15],
        "right_wrist": jointwise_score[16],
        "left_pinky": jointwise_score[17],
        "right_pinky": jointwise_score[18],
        "left_index": jointwise_score[19],
        "right_index": jointwise_score[20],
        "left_thumb": jointwise_score[21],
        "right_thumb": jointwise_score[22],
        "left_hip": jointwise_score[23],
        "right_hip": jointwise_score[24],
        "left_knee": jointwise_score[25],
        "right_knee": jointwise_score[26],
        "left_ankle": jointwise_score[27],
        "right_ankle": jointwise_score[28],
        "left_heel": jointwise_score[29],
        "right_heel": jointwise_score[30],
        "left_foot_index": jointwise_score[31],
        "right_foot_index": jointwise_score[32]
            }, 'angle_deviations': {
                'mean_torso_dev': mean_torso_dev,
                'max_torso_dev': max_torso_dev,
                'min_torso_dev': min_torso_dev,
                'mean_knee_dev': mean_knee_dev,
                'max_knee_dev': max_knee_dev,
                'min_knee_dev': min_knee_dev,
                'mean_hip_dev': mean_hip_dev,
                'max_hip_dev': max_hip_dev,
                'min_hip_dev': min_hip_dev
            }})
        text_feedback = feedback(input_dic)

    if(motion == 'Pull-Up'):
        pullup_scores = pcs_pullup(sequence)
        required_angles= calculate_angles(sequence, ['torso', 'elbow', 'shoulder'])
        net_score = (1 - (pullup_scores['loss'] - reference_scores['Pull_Up_scores']['min_net_loss'])/(1.69*reference_scores['Pull_Up_scores']['max_net_loss'] - reference_scores['Pull_Up_scores']['min_net_loss']))*100

        jointwise_score = np.zeros(33)
        for i in range(len(pullup_scores['jointwise_loss'])):
            jointwise_score[i] = (1 - (pullup_scores['jointwise_loss'][i] - reference_scores['Pull_Up_scores']['min_jointwise_loss'][i])/(1.69*reference_scores['Pull_Up_scores']['max_jointwise_loss'][i] - reference_scores['Pull_Up_scores']['min_jointwise_loss'][i]))*100

        mean_torso_dev = required_angles['torso'][0] - reference_angles['Pull-Up_references']['mean_torso']
        max_torso_dev = required_angles['torso'][1] - reference_angles['Pull-Up_references']['max_torso']
        min_torso_dev = required_angles['torso'][2] - reference_angles['Pull-Up_references']['min_torso']
        mean_elbow_dev = required_angles['elbow'][0] - reference_angles['Pull-Up_references']['mean_elbow']
        max_elbow_dev =  required_angles['elbow'][1] - reference_angles['Pull-Up_references']['max_elbow']
        min_elbow_dev = required_angles['elbow'][2] - reference_angles['Pull-Up_references']['min_elbow']
        mean_shoulder_dev = required_angles['shoulder'][0] - reference_angles['Pull-Up_references']['mean_shoulder']
        max_shoulder_dev = required_angles['shoulder'][1] - reference_angles['Pull-Up_references']['max_shoulder']
        min_shoulder_dev = required_angles['shoulder'][2] - reference_angles['Pull-Up_references']['min_shoulder']

        input_dic = str({'exercise': 'pullup', 'net_score': net_score, 'jointwise_score': {
        "nose": jointwise_score[0],
        "left_eye_inner": jointwise_score[1],
        "left_eye": jointwise_score[2],
        "left_eye_outer": jointwise_score[3],
        "right_eye_inner": jointwise_score[4],
        "right_eye": jointwise_score[5],
        "right_eye_outer": jointwise_score[6],
        "left_ear": jointwise_score[7],
        "right_ear": jointwise_score[8],
        "mouth_left": jointwise_score[9],
        "mouth_right": jointwise_score[10],
        "left_shoulder": jointwise_score[11],
        "right_shoulder": jointwise_score[12],
        "left_elbow": jointwise_score[13],
        "right_elbow": jointwise_score[14],
        "left_wrist": jointwise_score[15],
        "right_wrist": jointwise_score[16],
        "left_pinky": jointwise_score[17],
        "right_pinky": jointwise_score[18],
        "left_index": jointwise_score[19],
        "right_index": jointwise_score[20],
        "left_thumb": jointwise_score[21],
        "right_thumb": jointwise_score[22],
        "left_hip": jointwise_score[23],
        "right_hip": jointwise_score[24],
        "left_knee": jointwise_score[25],
        "right_knee": jointwise_score[26],
        "left_ankle": jointwise_score[27],
        "right_ankle": jointwise_score[28],
        "left_heel": jointwise_score[29],
        "right_heel": jointwise_score[30],
        "left_foot_index": jointwise_score[31],
        "right_foot_index": jointwise_score[32]
    }, 'angle_deviations': {
            'mean_torso_dev': mean_torso_dev,
            'max_torso_dev': max_torso_dev,
            'min_torso_dev': min_torso_dev,
            'mean_elbow_dev': mean_elbow_dev,
            'max_elbow_dev': max_elbow_dev,
            'min_elbow_dev': min_elbow_dev,
            'mean_shoulder_dev': mean_shoulder_dev,
            'max_shoulder_dev': max_shoulder_dev,
            'min_shoulder_dev': min_shoulder_dev
        }})
        text_feedback = feedback(input_dic)

    if(motion == 'Squat'):
        squat_scores = pcs_squat(sequence)
        required_angles= calculate_angles(sequence, ['torso', 'knee', 'hip'])
        net_score = (1 - (squat_scores['loss'] - reference_scores['Squat_scores']['min_net_loss'])/(1.69*reference_scores['Squat_scores']['max_net_loss'] - reference_scores['Squat_scores']['min_net_loss']))*100

        jointwise_score = np.zeros(33)
        for i in range(len(squat_scores['jointwise_loss'])):
            jointwise_score[i] = (1 - (squat_scores['jointwise_loss'][i] - reference_scores['Squat_scores']['min_jointwise_loss'][i])/(1.69*reference_scores['Squat_scores']['max_jointwise_loss'][i] - reference_scores['Squat_scores']['min_jointwise_loss'][i]))*100

        mean_torso_dev = required_angles['torso'][0] - reference_angles['Squat_references']['mean_torso']
        max_torso_dev = required_angles['torso'][1] - reference_angles['Squat_references']['max_torso']
        min_torso_dev = required_angles['torso'][2] - reference_angles['Squat_references']['min_torso']
        mean_knee_dev = required_angles['knee'][0] - reference_angles['Squat_references']['mean_knee']
        max_knee_dev =  required_angles['knee'][1] - reference_angles['Squat_references']['max_knee']
        min_knee_dev = required_angles['knee'][2] - reference_angles['Squat_references']['min_knee']
        mean_hip_dev = required_angles['hip'][0] - reference_angles['Squat_references']['mean_hip']
        max_hip_dev = required_angles['hip'][1] - reference_angles['Squat_references']['max_hip']
        min_hip_dev = required_angles['hip'][2] - reference_angles['Squat_references']['min_hip']

        input_dic = str({'exercise': 'squat', 'net_score': net_score, 'jointwise_score': {
        "nose": jointwise_score[0],
        "left_eye_inner": jointwise_score[1],
        "left_eye": jointwise_score[2],
        "left_eye_outer": jointwise_score[3],
        "right_eye_inner": jointwise_score[4],
        "right_eye": jointwise_score[5],
        "right_eye_outer": jointwise_score[6],
        "left_ear": jointwise_score[7],
        "right_ear": jointwise_score[8],
        "mouth_left": jointwise_score[9],
        "mouth_right": jointwise_score[10],
        "left_shoulder": jointwise_score[11],
        "right_shoulder": jointwise_score[12],
        "left_elbow": jointwise_score[13],
        "right_elbow": jointwise_score[14],
        "left_wrist": jointwise_score[15],
        "right_wrist": jointwise_score[16],
        "left_pinky": jointwise_score[17],
        "right_pinky": jointwise_score[18],
        "left_index": jointwise_score[19],
        "right_index": jointwise_score[20],
        "left_thumb": jointwise_score[21],
        "right_thumb": jointwise_score[22],
        "left_hip": jointwise_score[23],
        "right_hip": jointwise_score[24],
        "left_knee": jointwise_score[25],
        "right_knee": jointwise_score[26],
        "left_ankle": jointwise_score[27],
        "right_ankle": jointwise_score[28],
        "left_heel": jointwise_score[29],
        "right_heel": jointwise_score[30],
        "left_foot_index": jointwise_score[31],
        "right_foot_index": jointwise_score[32]
        }, 'angle_deviations': {
            'mean_torso_dev': mean_torso_dev,
            'max_torso_dev': max_torso_dev,
            'min_torso_dev': min_torso_dev,
            'mean_knee_dev': mean_knee_dev,
            'max_knee_dev': max_knee_dev,
            'min_knee_dev': min_knee_dev,
            'mean_hip_dev': mean_hip_dev,
            'max_hip_dev': max_hip_dev,
            'min_hip_dev': min_hip_dev
        }})
        text_feedback = feedback(input_dic)

    print(f"Exercise score is {net_score:.2f}\n")
    
    print("Feedback for exercise:\n")
    feedback_array = ast.literal_eval(text_feedback)
    for feedback in feedback_array:
        print(f"-> {feedback}")
        TTS(feedback)


    