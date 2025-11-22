# Quick Deployment Guide

## ⚠️ Important: Choose Your Deployment Strategy

Due to Vercel's serverless limitations (50MB package size, 4.5MB request body, 60s timeout), you have two options:

### Option A: Full Stack on Vercel (Experimental)
✅ Single deployment
⚠️ May hit size/timeout limits
📝 See `VERCEL_DEPLOYMENT.md`

### Option B: Split Deployment (Recommended)
✅ No size/timeout limits
✅ Better for video processing
✅ More reliable
📝 See `SPLIT_DEPLOYMENT.md`

## Quick Start - Option B (Recommended)

### 1. Deploy Frontend to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### 2. Deploy Backend to Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize and deploy
railway init
railway up

# Get your backend URL
railway domain
```

### 3. Connect Them

```bash
# Add backend URL to Vercel
vercel env add VITE_BACKEND_URL production
# Enter your Railway URL when prompted

# Redeploy frontend
vercel --prod
```

Done! Your app is live.

## Quick Start - Option A (Experimental)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod

# Add environment variables
vercel env add DJANGO_SECRET_KEY production
# Enter a secure random key

vercel env add DJANGO_ALLOWED_HOSTS production
# Enter your Vercel domain

# Redeploy
vercel --prod
```

## Testing Locally

### Test Full Stack
```bash
# Terminal 1: Backend
cd webapp
python manage.py runserver 8000

# Terminal 2: Frontend
cd frontend
npm install
npm run dev
```

Visit http://localhost:3000

## Need Help?

- Full Vercel deployment: See `VERCEL_DEPLOYMENT.md`
- Split deployment: See `SPLIT_DEPLOYMENT.md`
- Issues? Check the troubleshooting sections in those guides

## File Structure Overview

```
DES646_Project/
├── vercel.json              # Vercel config (Option A)
├── package.json             # Root package.json for builds
├── api/                     # Serverless API (Option A)
│   └── index.py
├── frontend/                # React frontend
│   ├── dist/               # Built files (generated)
│   ├── src/
│   └── package.json
├── webapp/                  # Django backend
│   └── webapp/
│       └── settings.py
├── Model/                   # ML models
├── requirements.txt         # Python dependencies
├── VERCEL_DEPLOYMENT.md    # Full guide for Option A
└── SPLIT_DEPLOYMENT.md     # Full guide for Option B
```
