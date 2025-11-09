import numpy as np
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, TensorDataset

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
criterion = nn.MSELoss()
optimizer = optim.Adam(model.parameters(), lr=1e-3)

data = np.load('X_60_augmented.npy')
dataset = TensorDataset(torch.tensor(data[:504], dtype=torch.float32))
train_loader = DataLoader(dataset, batch_size=16, shuffle=True)

num_epochs = 25

for epoch in range(num_epochs):
    model.train()
    total_loss = 0
    for batch in train_loader:
        x = batch[0].to(torch.float32)
        optimizer.zero_grad()
        output = model(x)
        loss = criterion(output, x)   # reconstruction loss
        loss.backward()
        optimizer.step()
        total_loss += loss.item()
    
    print(f"Epoch [{epoch+1}/{num_epochs}], Loss: {total_loss/len(train_loader):.4f}")

save_path = 'autoEncoder/Deadlift/trainedModel.pth'
torch.save(model.state_dict(), save_path)
print(f"\n Model training complete! Parameters saved to: {save_path}")