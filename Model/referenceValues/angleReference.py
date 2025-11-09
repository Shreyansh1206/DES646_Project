from angleCalculator import calculate_angles

import numpy as np
import json
import os

def update_json(file_path: str, new_data: dict):
    data = {}

    if os.path.exists(file_path) and os.path.getsize(file_path) > 0:
        try:
            with open(file_path, 'r') as f:
                data = json.load(f)
        except json.JSONDecodeError:
            print(f"Warning: File '{file_path}' exists but is empty or contains invalid JSON. Starting with an empty dictionary.")
        except Exception as e:
            print(f"An unexpected error occurred while reading the file: {e}")
            return
            
    data.update(new_data)

    try:
        with open(file_path, 'w') as f:
            json.dump(data, f, indent=4)
        print(f"Successfully updated and saved data to '{file_path}'.")
    except Exception as e:
        print(f"An error occurred while writing to the file: {e}")

if __name__ == "__main__":

    exercise = "Squat"
    file_path = "reference_angles.json"

    if(exercise == "Deadlift"):
        sequence_data = np.load('X_60_3d_Deadlift.npy')
        angles_collection = []
        print(sequence_data[0].shape)

        for i in range(sequence_data.shape[0]):
            angle_types = ['torso', 'knee', 'hip']
            angles = calculate_angles(sequence_data[i], angle_types)
            angles_collection.append(angles)
        
        min_knee, max_knee, mean_knee, min_torso, max_torso, mean_torso, min_hip, max_hip, mean_hip = [0 for i in range(9)]
        data_len = len(angles_collection)
        for i in range(data_len):
            mean_torso += angles_collection[i]['torso'][0]
            max_torso += angles_collection[i]['torso'][1]
            min_torso += angles_collection[i]['torso'][2]
            mean_knee += angles_collection[i]['knee'][0]
            max_knee += angles_collection[i]['knee'][1]
            min_knee += angles_collection[i]['knee'][2]
            mean_hip += angles_collection[i]['hip'][0]
            max_hip += angles_collection[i]['hip'][1]
            min_hip += angles_collection[i]['hip'][2]

        mean_torso /= data_len
        max_torso /= data_len
        min_torso /= data_len
        mean_knee /= data_len
        max_knee /= data_len
        min_knee /= data_len
        mean_hip /= data_len
        max_hip /= data_len
        min_hip /= data_len

        update_json(file_path, new_data = {'Deadlift_references': {'mean_torso': mean_torso, 'max_torso': max_torso, 'min_torso': min_torso, 'mean_knee': mean_knee, 'max_knee': max_knee, 'min_knee': min_knee, 'mean_hip': mean_hip, 'max_hip': max_hip, 'min_hip': min_hip}})

    if(exercise == "Pull-Up"):
        sequence_data = np.load('X_60_3d_Pull-Up.npy')
        angles_collection = []
        print(sequence_data[0].shape)

        for i in range(sequence_data.shape[0]):
            angle_types = ['torso', 'shoulder', 'elbow']
            angles = calculate_angles(sequence_data[i], angle_types)
            angles_collection.append(angles)
        
        min_elbow, max_elbow, mean_elbow, min_torso, max_torso, mean_torso, min_shoulder, max_shoulder, mean_shoulder = [0 for i in range(9)]
        data_len = len(angles_collection)
        for i in range(data_len):
            mean_torso += angles_collection[i]['torso'][0]
            max_torso += angles_collection[i]['torso'][1]
            min_torso += angles_collection[i]['torso'][2]
            mean_elbow += angles_collection[i]['elbow'][0]
            max_elbow += angles_collection[i]['elbow'][1]
            min_elbow += angles_collection[i]['elbow'][2]
            mean_shoulder += angles_collection[i]['shoulder'][0]
            max_shoulder += angles_collection[i]['shoulder'][1]
            min_shoulder += angles_collection[i]['shoulder'][2]

        mean_torso /= data_len
        max_torso /= data_len
        min_torso /= data_len
        mean_elbow /= data_len
        max_elbow /= data_len
        min_elbow /= data_len
        mean_shoulder /= data_len
        max_shoulder /= data_len
        min_shoulder /= data_len

        update_json(file_path, new_data = {'Pull-Up_references': {'mean_torso': mean_torso, 'max_torso': max_torso, 'min_torso': min_torso, 'mean_elbow': mean_elbow, 'max_elbow': max_elbow, 'min_elbow': min_elbow, 'mean_shoulder': mean_shoulder, 'max_shoulder': max_shoulder, 'min_shoulder': min_shoulder}})

    if(exercise == "Squat"):
        sequence_data = np.load('X_60_3d_Deadlift.npy')
        angles_collection = []
        print(sequence_data[0].shape)

        for i in range(sequence_data.shape[0]):
            angle_types = ['torso', 'knee', 'hip']
            angles = calculate_angles(sequence_data[i], angle_types)
            angles_collection.append(angles)
        
        min_knee, max_knee, mean_knee, min_torso, max_torso, mean_torso, min_hip, max_hip, mean_hip = [0 for i in range(9)]
        data_len = len(angles_collection)
        for i in range(data_len):
            mean_torso += angles_collection[i]['torso'][0]
            max_torso += angles_collection[i]['torso'][1]
            min_torso += angles_collection[i]['torso'][2]
            mean_knee += angles_collection[i]['knee'][0]
            max_knee += angles_collection[i]['knee'][1]
            min_knee += angles_collection[i]['knee'][2]
            mean_hip += angles_collection[i]['hip'][0]
            max_hip += angles_collection[i]['hip'][1]
            min_hip += angles_collection[i]['hip'][2]

        mean_torso /= data_len
        max_torso /= data_len
        min_torso /= data_len
        mean_knee /= data_len
        max_knee /= data_len
        min_knee /= data_len
        mean_hip /= data_len
        max_hip /= data_len
        min_hip /= data_len

        update_json(file_path, new_data = {'Squat_references': {'mean_torso': mean_torso, 'max_torso': max_torso, 'min_torso': min_torso, 'mean_knee': mean_knee, 'max_knee': max_knee, 'min_knee': min_knee, 'mean_hip': mean_hip, 'max_hip': max_hip, 'min_hip': min_hip}})





