import numpy as np
from optree.typing import Sequence
import torch
import torch.nn as nn

class PostureAutoencoder(nn.Module):
    def __init__(self, input_size=66, hidden_size=128, latent_size=32, num_layers=2):
        super(PostureAutoencoder, self).__init__()
        
        # Encoder
        self.encoder = nn.LSTM(input_size, hidden_size, num_layers, batch_first=True)
        self.enc_to_latent = nn.Linear(hidden_size, latent_size)
        
        # Decoder
        self.latent_to_dec = nn.Linear(latent_size, hidden_size)
        self.decoder = nn.LSTM(hidden_size, input_size, num_layers, batch_first=True)
        
    def forward(self, x):
        # x: (batch, timesteps, features)
        enc_out, (h, c) = self.encoder(x)               # (batch, time, hidden)
        latent = self.enc_to_latent(enc_out[:, -1, :])  # last time step → latent
        
        # expand latent for decoder sequence
        latent_seq = self.latent_to_dec(latent).unsqueeze(1).repeat(1, x.size(1), 1)
        
        dec_out, _ = self.decoder(latent_seq)           # reconstruct sequence
        return dec_out


model = PostureAutoencoder()
model.load_state_dict(torch.load("autoEncoder/Deadlift/trainedModel.pth", map_location="cpu"))

def posture_correctness_score(sequence):
    sequence = sequence[:,:,:2]
    sequence = sequence.reshape(sequence.shape[0], -1)
    sequence = torch.tensor(sequence, dtype=torch.float32).unsqueeze(0)
    model.eval()
    criterion = nn.MSELoss()

    with torch.no_grad():
        output = model(sequence)
        loss = criterion(output, sequence).item()
        diff = (output - sequence) ** 2               # (1, 60, 66)
        jointwise_loss = diff.mean(dim=1).squeeze(0)
        num_joints = 33
        jointwise_loss = jointwise_loss.view(num_joints, 2).sum(dim=1)

        return {'loss': loss, 'jointwise_loss': jointwise_loss}

# Normalize the score between 0 (bad) and 1 (perfect)