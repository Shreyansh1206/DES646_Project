from autoEncoder.Deadlift.model import posture_correctness_score as pcs_deadlift
from autoEncoder.Squat.model import posture_correctness_score as pcs_squat
from autoEncoder.Pull_Up.model import posture_correctness_score as pcs_pullup

import numpy as np
import json 
import os
from tqdm import tqdm

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

if __name__ == '__main__':
    exercise = 'Squat'
    file_path = 'reference_scores.json'
    sequence_data = np.load('X_60_augmented.npy')
    sequence_data = sequence_data.reshape(-1, 60, 33, 2)

    if(exercise == 'Deadlift'):
        sequences = sequence_data[:504]
    elif(exercise == "Pull_Up"):
        sequences = sequence_data[504:1044]
    elif(exercise == "Squat"):
        sequences = sequence_data[1044:]

    min_net_loss = 100
    max_net_loss = 0
    min_jointwise_loss = np.full(33, 10)
    print(min_jointwise_loss)
    max_jointwise_loss = np.zeros(33)

    for seq in tqdm(sequences, desc = "processing"):
        loss_values = pcs_deadlift(seq)

        min_net_loss = min(loss_values['loss'], min_net_loss)
        max_net_loss = max(loss_values['loss'], max_net_loss)

        for i in range(len(loss_values['jointwise_loss'])):
            min_jointwise_loss[i] = min(min_jointwise_loss[i], loss_values['jointwise_loss'][i])
            max_jointwise_loss[i] = max(max_jointwise_loss[i], loss_values['jointwise_loss'][i])

    print(min_net_loss)
    print(max_net_loss)
    print(min_jointwise_loss)
    print(max_jointwise_loss)

    update_json(file_path, new_data = {f"{exercise}_scores": {'min_net_loss': min_net_loss, 'max_net_loss': max_net_loss, 'min_jointwise_loss': min_jointwise_loss.tolist(), 'max_jointwise_loss': max_jointwise_loss.tolist()}})



