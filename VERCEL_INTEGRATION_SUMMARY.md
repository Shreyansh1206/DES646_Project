# Vercel Integration Summary

## What Was Done

I've set up your DES646 Project for deployment on Vercel with two approaches:

### Files Created/Modified

1. **`vercel.json`** - Full-stack Vercel configuration (frontend + backend as serverless)
2. **`vercel-frontend-only.json`** - Frontend-only configuration (recommended)
3. **`api/index.py`** - Serverless function handler for Django backend
4. **`package.json`** - Root package.json for build commands
5. **`.vercelignore`** - Files to exclude from deployment
6. **`frontend/package.json`** - Added `vercel-build` script
7. **`frontend/vite.config.js`** - Updated for production builds
8. **`DEPLOYMENT_QUICKSTART.md`** - Quick start guide
9. **`VERCEL_DEPLOYMENT.md`** - Comprehensive full-stack deployment guide
10. **`SPLIT_DEPLOYMENT.md`** - Recommended split deployment guide
11. **`README.md`** - Updated with deployment information

## Two Deployment Options

### ⭐ Option A: Full Stack on Vercel (Experimental)

**Pros:**
- Single deployment
- Everything on Vercel
- Simpler configuration

**Cons:**
- 50MB serverless package size limit
- 4.5MB request body limit (bad for video uploads)
- 60 second timeout (may be too short for ML processing)
- Your PyTorch + MediaPipe dependencies might exceed limits

**When to use:** Quick demos, testing, small projects

### ⭐⭐⭐ Option B: Split Deployment (Recommended)

**Frontend on Vercel:**
- Fast CDN hosting
- Automatic HTTPS
- Great developer experience

**Backend on Railway/Render:**
- No file size limits
- No timeout limits
- Better for ML models
- Supports long-running video processing

**Pros:**
- No limitations
- Better performance
- More reliable
- Industry standard approach

**Cons:**
- Two deployments to manage
- Slightly more configuration

**When to use:** Production apps, video processing, ML models

## How to Deploy

### Quick Start (Split Deployment - Recommended)

```bash
# 1. Deploy Backend to Railway
npm install -g @railway/cli
railway login
railway init
railway up
railway domain  # Get your backend URL

# 2. Deploy Frontend to Vercel
npm install -g vercel
vercel login

# Use frontend-only config
mv vercel.json vercel-fullstack.json
mv vercel-frontend-only.json vercel.json

vercel --prod

# 3. Set backend URL
vercel env add VITE_BACKEND_URL production
# Enter your Railway URL when prompted

# 4. Redeploy frontend
vercel --prod
```

### Alternative (Full Stack on Vercel - Experimental)

```bash
npm install -g vercel
vercel login
vercel --prod

# Set environment variables
vercel env add DJANGO_SECRET_KEY production
vercel env add DJANGO_ALLOWED_HOSTS production
```

## Important Notes

### Vercel Limitations
Your project has:
- Heavy ML dependencies (PyTorch, MediaPipe)
- Video file uploads (potentially > 4.5MB)
- ML inference (may take > 60 seconds)

**These all exceed Vercel's serverless limits**, which is why **split deployment is strongly recommended**.

### Cost Comparison

| Service | Free Tier | Cost After |
|---------|-----------|------------|
| Vercel (frontend) | 100GB bandwidth | $20/month |
| Railway (backend) | 500 hours | $5/month (500 hrs) |
| Render (backend) | 750 hours | $7/month (after free) |

**Recommended combo:** Vercel (frontend) + Railway (backend) = Free tier or ~$5/month

## Testing Before Deployment

Local test:
```bash
# Terminal 1
cd webapp
python manage.py runserver 8000

# Terminal 2
cd frontend
npm install
npm run dev
```

Visit http://localhost:3000

## Next Steps

1. **Choose your deployment strategy** (split recommended)
2. **Read the appropriate guide:**
   - Split: `SPLIT_DEPLOYMENT.md`
   - Full stack: `VERCEL_DEPLOYMENT.md`
3. **Set up accounts:**
   - [Vercel](https://vercel.com) (for frontend)
   - [Railway](https://railway.app) (for backend - recommended)
4. **Deploy using the guides**
5. **Test your deployed app**

## Getting Help

- Check the troubleshooting sections in the deployment guides
- Review Vercel logs: `vercel logs`
- Review Railway logs: `railway logs`
- Check browser console for frontend errors
- Test API endpoints directly with curl/Postman

## Architecture Diagram

```
┌─────────────────────────────────────────────────┐
│                   User Browser                   │
└───────────────────┬─────────────────────────────┘
                    │
                    │ HTTPS
                    ▼
┌─────────────────────────────────────────────────┐
│              Vercel CDN (Frontend)               │
│          React + Vite Static Files               │
└───────────────────┬─────────────────────────────┘
                    │
                    │ API Calls to /inference
                    ▼
┌─────────────────────────────────────────────────┐
│         Railway/Render (Backend)                 │
│     Django + PyTorch + MediaPipe                │
│     Video Processing + ML Inference              │
└─────────────────────────────────────────────────┘
```

This separation gives you:
- Fast frontend delivery (Vercel's CDN)
- Unlimited backend processing (Railway)
- Better scalability
- Better reliability

Good luck with your deployment! 🚀
