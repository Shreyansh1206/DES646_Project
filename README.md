# DES646 Project - Web UI

This repo contains model code and a minimal Django web UI to upload videos and stream simple feedback.

## Quick start (conda — recommended for macOS)

**Prerequisites:**
- Install conda or mamba (Miniforge/Mambaforge recommended for Apple Silicon): https://github.com/conda-forge/miniforge
- Install ffmpeg: `brew install ffmpeg`

**Setup:**

1. Create a conda environment with Python 3.11 and install dependencies:

```bash
# Create and activate environment
conda create -n mp-env python=3.11 -y
conda activate mp-env

# Install MediaPipe and other dependencies via pip
pip install mediapipe django torch numpy opencv-python
```

2. Run the Django dev server:

```bash
cd webapp
python manage.py runserver
```

3. Open http://127.0.0.1:8000/ and upload a small mp4 to see streamed feedback.

## Alternative: pip + venv (if you prefer not to use conda)

**Note:** Use Python 3.10 or 3.11 (MediaPipe wheels may not be available for Python 3.13+).

```bash
python3.11 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cd webapp
python manage.py runserver
```

## Running the React Frontend (Development)

The frontend is a React app that connects to the Django backend.

1. Install Node.js dependencies:

```bash
cd frontend
npm install
```

2. Start the React dev server (make sure Django backend is running first):

```bash
npm run dev
```

3. Open http://localhost:3000 in your browser

The Vite dev server automatically proxies API requests to the Django backend at http://127.0.0.1:8000.

## Development Workflow

**Terminal 1 (Backend):**
```bash
conda activate mp-env
cd webapp
python manage.py runserver
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```

Then visit http://localhost:3000 to use the app.

## Notes
- This is an initial scaffold. The backend reuses `preProcessing.py`, `angleCalculator.py` and `motionClassification/motionClassifier.py` from the repo.
- The SSE streaming is implemented using an HTTP streaming response and a simple repetition heuristic; we will iterate to improve accuracy.
- The React frontend shows live feedback (knee angle, rep count, position) as the video is processed.
- If you encounter MediaPipe import errors, ensure you're using Python 3.10 or 3.11 and that ffmpeg is installed.
# DES646_Project