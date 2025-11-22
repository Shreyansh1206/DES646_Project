# Alternative Deployment: Frontend on Vercel, Backend Separately

If you encounter issues with Vercel's serverless limitations (file size, timeouts, etc.), here's a recommended split deployment approach:

## Architecture

```
┌─────────────────┐
│   Vercel        │
│   (Frontend)    │
└────────┬────────┘
         │
         │ HTTPS
         ▼
┌─────────────────┐
│   Railway/      │
│   Render/Heroku │
│   (Backend)     │
└─────────────────┘
```

## Step 1: Deploy Frontend to Vercel

### 1. Create `vercel-frontend.json`
```json
{
  "version": 2,
  "buildCommand": "cd frontend && npm install && npm run build",
  "outputDirectory": "frontend/dist",
  "routes": [
    {
      "src": "/assets/(.*)",
      "dest": "/assets/$1"
    },
    {
      "src": "/(.*\\.(js|css|png|jpg|jpeg|gif|svg|ico|json|woff|woff2|ttf|eot))",
      "dest": "/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### 2. Deploy to Vercel
```bash
# Rename vercel.json temporarily
mv vercel.json vercel-fullstack.json
mv vercel-frontend.json vercel.json

# Deploy
vercel --prod

# Set environment variable for backend URL
vercel env add VITE_BACKEND_URL
# Enter your backend URL (e.g., https://your-backend.railway.app)
```

## Step 2: Deploy Backend to Railway

Railway is recommended for Django backends with ML models.

### 1. Install Railway CLI
```bash
npm install -g @railway/cli
```

### 2. Login to Railway
```bash
railway login
```

### 3. Create `railway.json` (optional)
```json
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "gunicorn webapp.webapp.wsgi:application --bind 0.0.0.0:$PORT"
  }
}
```

### 4. Create `Procfile` for Railway
```
web: gunicorn webapp.webapp.wsgi:application --bind 0.0.0.0:$PORT --timeout 300
```

### 5. Deploy to Railway
```bash
railway init
railway up
```

### 6. Set Environment Variables on Railway
```bash
railway variables set DJANGO_SECRET_KEY=your-secret-key
railway variables set DJANGO_DEBUG=0
railway variables set DJANGO_ALLOWED_HOSTS=.railway.app
railway variables set CORS_ALLOW_ALL=1
```

### 7. Get Backend URL
```bash
railway domain
# This gives you your backend URL
```

## Step 3: Connect Frontend to Backend

Update Vercel environment variables:
```bash
vercel env add VITE_BACKEND_URL production
# Enter your Railway URL: https://your-backend.railway.app
```

Redeploy frontend:
```bash
vercel --prod
```

## Alternative: Render.com

Render is another great option for Django backends.

### 1. Create `render.yaml`
```yaml
services:
  - type: web
    name: des646-backend
    env: python
    buildCommand: "pip install -r requirements.txt"
    startCommand: "gunicorn webapp.webapp.wsgi:application --bind 0.0.0.0:$PORT --timeout 300"
    envVars:
      - key: DJANGO_SECRET_KEY
        generateValue: true
      - key: DJANGO_DEBUG
        value: 0
      - key: DJANGO_ALLOWED_HOSTS
        value: .onrender.com
      - key: CORS_ALLOW_ALL
        value: 1
```

### 2. Deploy to Render
- Go to [render.com](https://render.com)
- Connect your GitHub repo
- Render will auto-detect the `render.yaml`
- Click "Deploy"

## Cost Comparison

| Platform | Frontend | Backend | Free Tier |
|----------|----------|---------|-----------|
| Vercel (full) | ✅ | ⚠️ Limited | 100GB bandwidth/month |
| Vercel + Railway | ✅ | ✅ | $5/month Railway (500 hrs) |
| Vercel + Render | ✅ | ✅ | 750 hrs/month |
| Netlify + Railway | ✅ | ✅ | Similar to Vercel |

## Recommended: Vercel + Railway

**Why?**
- Railway has generous free tier (500 hours/month)
- No file size limits
- No timeout limits
- Better for ML models
- Automatic HTTPS
- Easy environment variables
- Great for video processing

**Steps:**
1. Deploy frontend to Vercel (fast static hosting)
2. Deploy backend to Railway (better for heavy processing)
3. Connect them via environment variables

This gives you the best of both worlds!
