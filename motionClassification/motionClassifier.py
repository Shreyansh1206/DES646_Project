import os
import sys
import cv2
import json
import torch
import subprocess
import numpy as np
import mediapipe as mp
import torch.nn as nn

# Constants
MAX_FRAMES = 60
NUM_KEYPOINTS = 33
KEYPOINT_DIM = 2
INPUT_SIZE = NUM_KEYPOINTS * KEYPOINT_DIM

# Get the directory containing this file, then construct absolute paths
_THIS_DIR = os.path.dirname(os.path.abspath(__file__))
_LABEL_MAP_PATH = os.path.join(_THIS_DIR, 'label_map.json')
_MODEL_PATH = os.path.join(_THIS_DIR, 'lstm_classification_model.pth')

# Label map
with open(_LABEL_MAP_PATH, 'r') as f:
    label_map = json.load(f)

idx_to_class = {v: k for k, v in label_map.items()}

# Defining LSTM Model
class LSTMPoseClassifier(nn.Module):
    def __init__(self, input_size, hidden1, hidden2, num_classes):
        super(LSTMPoseClassifier, self).__init__()
        self.lstm1 = nn.LSTM(input_size, hidden1, batch_first=True)
        self.bn1 = nn.BatchNorm1d(MAX_FRAMES)
        self.dropout1 = nn.Dropout(0.3)

        self.lstm2 = nn.LSTM(hidden1, hidden2, batch_first=True)
        self.dropout2 = nn.Dropout(0.3)

        self.fc1 = nn.Linear(hidden2, 64)
        self.relu = nn.ReLU()
        self.dropout3 = nn.Dropout(0.3)
        self.fc2 = nn.Linear(64, len(label_map))

    def forward(self, x):
        out, _ = self.lstm1(x)
        out = self.bn1(out)
        out = self.dropout1(out)

        out, _ = self.lstm2(out)
        out = self.dropout2(out)

        out = self.fc1(out[:, -1, :])
        out = self.relu(out)
        out = self.dropout3(out)
        out = self.fc2(out)
        return out

#Load Model
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = LSTMPoseClassifier(INPUT_SIZE, 128, 64, len(label_map)).to(device)
model.load_state_dict(torch.load(_MODEL_PATH, map_location=device))
model.eval()

def predict_motion(sequence):
    if sequence is not None:
        sequence = sequence[:,:,:2]
    sequence = sequence.reshape(MAX_FRAMES, INPUT_SIZE)
    input_tensor = torch.tensor(sequence, dtype=torch.float32).unsqueeze(0).to(device)

    with torch.no_grad():
        output = model(input_tensor)
        predicted_class = torch.argmax(output, dim=1).item()
        class_label = idx_to_class[predicted_class]

    label = idx_to_class[predicted_class]
    # print(f"Predicted Motion: {label}")
    return label