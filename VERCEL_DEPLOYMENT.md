# Deploying to Vercel

This guide explains how to deploy the DES646 Project (frontend + backend) to Vercel.

## Architecture

- **Frontend**: React + Vite app (deployed as static site)
- **Backend**: Django API (deployed as serverless functions)
- **Routes**: 
  - `/inference/*` → Python serverless function (Django backend)
  - `/*` → Static frontend files

## Prerequisites

1. [Vercel Account](https://vercel.com) (free tier works)
2. [Vercel CLI](https://vercel.com/docs/cli) (optional but recommended)
   ```bash
   npm install -g vercel
   ```

## Important Limitations

⚠️ **Vercel Serverless Function Limitations**:
- **50MB size limit** for deployment package (including dependencies)
- **4.5MB body size limit** for requests
- **60 second execution timeout** (on Pro plan, 10s on Hobby)
- **Memory limit**: Up to 3008MB (configured in vercel.json)

These limitations may affect your Django backend, especially:
- Large video file uploads (4.5MB limit)
- Heavy ML model dependencies (50MB package limit)
- Long-running video processing (60s timeout)

### Recommended Alternatives for Production:
If you encounter these limitations, consider:
- **Vercel (frontend only)** + **Railway/Render (backend)**: Deploy frontend on Vercel, backend separately
- **Netlify** with similar serverless limitations
- **Traditional hosting** like AWS EC2, DigitalOcean, or Heroku for the backend

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Add Vercel configuration"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel will auto-detect the configuration from `vercel.json`

3. **Configure Environment Variables**
   In Vercel dashboard → Settings → Environment Variables, add:
    - `DJANGO_SECRET_KEY`: Generate a secure random key
     ```bash
     python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'
     ```
   - `DJANGO_DEBUG`: `0` (for production)
   - `DJANGO_ALLOWED_HOSTS`: Your Vercel domain (e.g., `your-app.vercel.app`)
   - `CORS_ALLOW_ALL`: `1` (or configure specific origins)

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically

### Option 2: Deploy via Vercel CLI

1. **Login to Vercel**
   ```bash
   vercel login
   ```

2. **Deploy**
   ```bash
   # For preview deployment
   vercel
   
   # For production deployment
   vercel --prod
   ```

3. **Set environment variables**
   ```bash
   vercel env add DJANGO_SECRET_KEY
   vercel env add DJANGO_DEBUG
   vercel env add DJANGO_ALLOWED_HOSTS
   ```

## Project Structure for Vercel

```
DES646_Project/
├── vercel.json              # Vercel configuration
├── api/
│   └── index.py            # Django serverless handler
├── frontend/
│   ├── dist/               # Built frontend (created during build)
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── webapp/                 # Django backend
├── Model/                  # ML models
└── requirements.txt        # Python dependencies
```

## Configuration Files

### vercel.json
Configures:
- Build command for frontend
- Serverless function routing
- Environment variables
- Function settings (memory, timeout)

### api/index.py
Serverless function handler that:
- Initializes Django
- Converts Vercel requests to Django requests
- Handles the inference endpoint

## Testing Locally

Before deploying, test the production build locally:

1. **Build frontend**
   ```bash
   cd frontend
   npm install
   npm run build
   cd ..
   ```

2. **Test serverless function locally**
   ```bash
   vercel dev
   ```
   This starts a local dev server that simulates Vercel's environment.

## Troubleshooting

### Build Fails
- Check that all dependencies are in `requirements.txt`
- Ensure Python version compatibility (Vercel uses Python 3.9 by default)
- Check build logs in Vercel dashboard

### Serverless Function Timeout
- Video processing may take too long
- Consider:
  - Optimizing processing code
  - Using background jobs (Vercel doesn't support this well)
  - Deploying backend separately on a platform without timeouts

### Import Errors
- Ensure all Python paths are correct in `api/index.py`
- Check that Django settings are properly configured
- Verify `DJANGO_SETTINGS_MODULE` is set correctly

### Large Dependencies
If your `requirements.txt` creates a package > 50MB:
- Remove unnecessary dependencies
- Use lighter-weight alternatives
- Consider deploying backend elsewhere

### CORS Issues
- Ensure `CORS_ALLOW_ALL` is set to `1` or
- Configure specific origins in Django settings

## Post-Deployment

1. **Test the deployment**
   - Visit your Vercel URL
   - Test video upload functionality
   - Check browser console for errors

2. **Monitor performance**
   - Check Vercel Analytics
   - Monitor function execution time
   - Watch for timeout errors

3. **Custom Domain (Optional)**
   - Go to Settings → Domains in Vercel dashboard
   - Add your custom domain
   - Configure DNS as instructed

## Known Issues with This Setup

1. **File Upload Size**: Vercel has a 4.5MB body size limit, which may be too small for video files
2. **Processing Time**: 60-second timeout may not be enough for video processing
3. **Model Size**: ML models (PyTorch, MediaPipe) may exceed 50MB package limit

### Recommended Architecture for Production

For a production app with video processing:

```
Frontend (Vercel)
    ↓
Backend API (Railway/Render/AWS)
    ↓
Storage (S3/Cloudinary for videos)
    ↓
Processing Queue (Celery/Redis)
```

This separates concerns and avoids serverless limitations.

## Alternative: Split Deployment

If Vercel serverless doesn't work for your backend:

1. **Deploy Frontend on Vercel**
   - Remove `api/` directory
   - Update `vercel.json` to only serve static files
   - Set `VITE_BACKEND_URL` environment variable

2. **Deploy Backend Separately**
   - Use Railway, Render, or Heroku
   - Update frontend to point to backend URL

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Python Runtime](https://vercel.com/docs/functions/runtimes/python)
- [Django on Vercel Guide](https://vercel.com/guides/deploying-django-with-vercel)
- [Vercel Limits](https://vercel.com/docs/limits)
