# DES646 Project - Web UI

This repo contains model code and a minimal Django web UI to upload videos and stream simple feedback.

## ⚠️ Python Version Requirement

**This project requires Python 3.10 or 3.11** due to MediaPipe compatibility. Python 3.13+ is not supported.

**No ffmpeg required** – Video processing uses OpenCV for better portability.

## Quick Start (Recommended)

Use the combined start script to launch both backend and frontend:

```bash
# Make sure you have conda with mp-env or des646-py311 environment, or a .venv with Python 3.11
./start.sh
```

The script will:
- Check your Python environment (conda or venv)
- Verify Python version compatibility
- Install frontend dependencies if needed
- Start Django backend on http://127.0.0.1:8000
- Start Vite frontend on http://localhost:3000
- Display colored logs from both services

Press `Ctrl+C` to stop both services.

## Manual Setup (conda — recommended for macOS)

**Prerequisites:**
- Install conda or mamba (Miniforge/Mambaforge recommended for Apple Silicon): https://github.com/conda-forge/miniforge

**Setup:**

1. Create a conda environment with Python 3.11 and install dependencies:

```bash
# Create and activate environment
conda create -n mp-env python=3.11 -y
conda activate mp-env

# Install dependencies
pip install -r requirements.txt
```

2. Run the Django dev server:

```bash
cd webapp
python manage.py runserver
```

3. Open http://127.0.0.1:8000/ and upload a small mp4 to see streamed feedback.

## Alternative: pip + venv

**Note:** You must use Python 3.10 or 3.11. MediaPipe wheels are not available for Python 3.13+.

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
npm start
```

(`npm run dev` also works; `npm start` added for convention.)

3. Open http://localhost:3000 in your browser

The Vite dev server automatically proxies API requests to the Django backend at http://127.0.0.1:8000.

## Development Workflow

### Option 1: Combined Start Script (Easiest)

```bash
./start.sh
```

Launches both backend and frontend with a single command. Uses your configured conda environment or .venv.

### Option 2: Manual (Two Terminals)

**Terminal 1 (Backend):**
```bash
conda activate mp-env  # or: source .venv/bin/activate
cd webapp
python manage.py runserver
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm start
```

Then visit http://localhost:3000 to use the app.

## Dependency Versions

This project uses pinned versions for reproducibility:
- Django 5.2.8
- MediaPipe 0.10.14
- PyTorch 2.2.2
- OpenCV 4.12.0.88
- NumPy 2.2.6

See `requirements.txt` for the complete list.

## Notes
- This is an initial scaffold. The backend reuses `preProcessing.py`, `angleCalculator.py` and `motionClassification/motionClassifier.py` from the repo.
- The SSE streaming is implemented using an HTTP streaming response and a simple repetition heuristic; we will iterate to improve accuracy.
- The React frontend shows live feedback (knee angle, rep count, position) as the video is processed.
- **Video processing uses OpenCV** (no ffmpeg dependency required).
- If you encounter MediaPipe import errors, ensure you're using Python 3.10 or 3.11.

## Troubleshooting

### "Missing dependency: No module named 'mediapipe'"
- **Cause:** Python 3.13+ doesn't have MediaPipe wheels available.
- **Fix:** Use Python 3.10 or 3.11. Create conda env: `conda create -n mp-env python=3.11 -y`

### "Internal Server Error" on upload
- **Common causes:**
  1. Django server not running → Run `./start.sh` or manually start Django
  2. Wrong Python version → Check you're using conda env with Python 3.11
  3. Missing dependencies → Run `pip install -r requirements.txt`
  4. Invalid video file → Upload must be a valid .mp4 video
- **Debug:** Check terminal logs where Django is running for detailed error messages

### Frontend can't connect to backend
- Ensure Django is running on http://127.0.0.1:8000
- Frontend dev server proxies `/inference` requests to Django automatically
- If ports conflict, check `vite.config.js` proxy settings
# DES646_Project