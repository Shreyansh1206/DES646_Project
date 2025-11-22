# DES646 Project — Web UI + Inference Service

Upload a workout video, run MediaPipe + PyTorch inference, and stream live feedback via a Django backend with a modern Vite + React frontend. Optional TTS feedback is supported.

## Requirements

- Python 3.10 or 3.11 (MediaPipe wheels do not support 3.13 yet)
- Node.js 18+ and npm (for Vite 6)
- macOS/Windows/Linux supported; conda recommended on macOS (Apple Silicon)
- No ffmpeg needed (OpenCV is used for video I/O)

## One-time setup

Run the setup helper to prepare Python and Node environments and apply migrations.

```bash
./setup.sh
```

What it does:
- Creates/uses a conda env `mp-env` (or a local `.venv`) with Python 3.11
- Installs Python dependencies from `requirements.txt`
- Installs frontend dependencies in `frontend/`
- Creates project folders like `Model/Input_Video` and `tts_output`
- Runs initial Django migrations

## Daily development

Start both backend and frontend with one command:

```bash
./start.sh
```

This will:
- Detect and use your conda env (`mp-env`/`des646-py311`) or `.venv`
- Start Django on http://127.0.0.1:8000
- Start Vite on http://localhost:3000
- Auto-open the browser (macOS)

Press Ctrl+C to stop both.

### Run services manually (two terminals)

Terminal 1 (backend):
```bash
conda activate mp-env   # or: source .venv/bin/activate
cd webapp
python manage.py runserver 127.0.0.1:8000
```

Terminal 2 (frontend):
```bash
cd frontend
npm start   # or: npm run dev
```

Open http://localhost:3000. During development, Vite proxies `/inference` requests to http://127.0.0.1:8000 (see `frontend/vite.config.js`).

## Environment variables

Set these in your shell (zsh) before running, as needed:

```bash
export DJANGO_DEBUG=1
export DJANGO_SECRET_KEY="a-long-random-string"
export GROQ_API_KEY="your-groq-key"              # for AI/NLP feedback (optional)
export DJANGO_ALLOWED_HOSTS="localhost,127.0.0.1"
```

Frontend (production builds on Vercel or static hosting) should point at your backend. If you are using the Railway deployment created in this repo the fallback URL baked into the React component is:

```
https://kinetiform-production.up.railway.app
```

You can still override via env var:

```bash
export VITE_BACKEND_URL="https://kinetiform-production.up.railway.app"  # or your own Railway app URL
```

Note: The `start.sh` file currently exports a placeholder `GROQ_API_KEY` for local dev. Override it by setting your own key in the shell before running, or remove that line if not needed.

## Frontend

Common commands:

```bash
cd frontend
npm install      # once
npm run dev      # start dev server on :3000
npm run build    # production build to dist/
npm run preview  # serve the built app locally
```

## Backend

Main project lives under `webapp/` and exposes inference endpoints under `/inference/*` (see `webapp/webapp/inference/`). A minimal SQLite DB (`webapp/db.sqlite3`) is used for Django admin/auth defaults.

Endpoints (examples):
- GET `/inference/health/` — health/status JSON (used by probes)
- POST `/inference/upload/` — upload an mp4 and stream feedback (Server-Sent Events)

## Models and data

Pretrained weights are tracked in-repo for quick starts:
- `Model/autoEncoder/*/trainedModel.pth`
- `Model/motionClassification/lstm_classification_model.pth`

Supporting references live in `Model/referenceValues/`. Input videos are written to `Model/Input_Video/` during processing; speech is output to `tts_output/`.

## Dependency versions (pinned)

- Django 5.2.8
- MediaPipe 0.10.14
- PyTorch 2.2.2
- OpenCV 4.12.0.88
- NumPy 2.2.6

See `requirements.txt` for the full list.

## Repository structure (high level)

```
frontend/          # Vite + React app
webapp/            # Django project (wsgi, urls, views)
Model/             # Inference code, models, and references
  autoEncoder/     # Exercise-specific autoencoders (trainedModel.pth)
  motionClassification/  # LSTM classifier + label map
  referenceValues/ # Angles and scoring references
tts_output/        # Generated speech outputs
Procfile           # gunicorn entry for deployment
setup.sh           # one-time environment setup helper
start.sh           # dev convenience to start backend + frontend together
requirements.txt   # pinned Python deps
```

## Deployment

**Quick Start**: See `DEPLOYMENT_QUICKSTART.md` for fast deployment instructions.

We provide two deployment strategies:

### Option A: Full Stack on Vercel (Experimental)
Deploy both frontend and backend to Vercel using serverless functions.
- 📝 Full guide: `VERCEL_DEPLOYMENT.md`
- ⚠️ **Limitations**: 50MB package size, 4.5MB request body, 60s timeout
- Best for: Small demos, testing

### Option B: Split Deployment (Recommended for Production)
Deploy frontend to Vercel, backend to Railway/Render.
- 📝 Full guide: `SPLIT_DEPLOYMENT.md`
- ✅ **No limits**: Better for video processing and ML models
- Best for: Production apps, larger files, longer processing

### Quick Split Deployment

**Backend** (Railway recommended):
- Ensure `Procfile` contains: `web: gunicorn webapp.webapp.wsgi:application --bind 0.0.0.0:$PORT`
- Configure env vars: `DJANGO_SECRET_KEY`, `DJANGO_DEBUG=0`, `DJANGO_ALLOWED_HOSTS`, and CORS settings
- Deploy: `railway init && railway up`

**Frontend** (Vercel):
- Project root: `frontend/`
- Build: `npm run build` ; Output: `dist`
- Env: `VITE_BACKEND_URL=https://<your-railway-app>.railway.app`
- Deploy: `vercel --prod`

### CORS

In development, the Vite dev server proxies to `127.0.0.1:8000`. In production, set `CORS_ALLOWED_ORIGINS` on the backend to your frontend domain and set `DJANGO_DEBUG=0`.

## Troubleshooting

Ports already in use
- If :3000 or :8000 is taken, stop old dev servers. `start.sh` attempts to kill lingering processes automatically.

MediaPipe import error
- Ensure Python 3.10 or 3.11. Recreate env: `conda create -n mp-env python=3.11 -y` then `pip install -r requirements.txt`.

Frontend cannot reach backend
- Confirm backend is at http://127.0.0.1:8000 and see `vite.config.js` proxy. For production, set `VITE_BACKEND_URL`.

Database issues after code changes
- Run migrations: `python webapp/manage.py migrate`.

Video upload fails
- Only valid `.mp4` files are supported in the current flow. Try a short clip first.

## Notes

- Backend computations reuse `Model/preProcessing.py`, `Model/angleCalculator.py`, and `Model/motionClassification/motionClassifier.py`.
- Streaming is implemented with SSE; you can tune thresholds and timings in `webapp/webapp/inference/services.py`.
- On Apple Silicon, prefer Miniforge/Mambaforge builds for better PyTorch/NumPy performance.