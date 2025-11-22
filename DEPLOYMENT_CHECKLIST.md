# Deployment Checklist

Use this checklist to deploy your DES646 Project step-by-step.

## ✅ Pre-Deployment Checklist

### Local Testing
- [ ] Backend runs locally: `cd webapp && python manage.py runserver`
- [ ] Frontend runs locally: `cd frontend && npm run dev`
- [ ] Video upload works locally
- [ ] ML inference produces results
- [ ] No console errors in browser

### Code Preparation
- [ ] All changes committed to git
- [ ] Code pushed to GitHub/GitLab
- [ ] `.env` files not committed (in `.gitignore`)
- [ ] Secrets removed from code

### Dependencies
- [ ] `requirements.txt` is up to date
- [ ] `frontend/package.json` has all dependencies
- [ ] No development dependencies in production

## 🚀 Deployment Steps (Vercel + Railway)

### Part 1: Deploy Backend to Railway

- [ ] **Install Railway CLI**
  ```bash
  npm install -g @railway/cli
  ```

- [ ] **Login to Railway**
  ```bash
  railway login
  ```

- [ ] **Initialize Railway Project**
  ```bash
  railway init
  ```
  - Choose: "Create a new project"
  - Name: "des646-backend" (or your choice)

- [ ] **Deploy Backend**
  ```bash
  railway up
  ```
  - Wait for build to complete
  - Check logs: `railway logs`

- [ ] **Add Environment Variables**
  ```bash
  # Generate a secret key first
  python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'
  
  # Set variables
  railway variables set DJANGO_SECRET_KEY="<your-generated-key>"
  railway variables set DJANGO_DEBUG=0
  railway variables set DJANGO_ALLOWED_HOSTS=".railway.app"
  railway variables set CORS_ALLOW_ALL=1
  ```

- [ ] **Get Backend URL**
  ```bash
  railway domain
  ```
  - Copy this URL (e.g., `https://des646-backend.railway.app`)
  - Save it for frontend deployment

- [ ] **Test Backend**
  ```bash
  curl https://your-backend.railway.app/inference/upload_video
  ```
  - Should return 200 OK (health check)

### Part 2: Deploy Frontend to Vercel

- [ ] **Switch to Frontend-Only Config**
  ```bash
  mv vercel.json vercel-fullstack.json
  mv vercel-frontend-only.json vercel.json
  ```

- [ ] **Install Vercel CLI**
  ```bash
  npm install -g vercel
  ```

- [ ] **Login to Vercel**
  ```bash
  vercel login
  ```

- [ ] **Deploy Frontend**
  ```bash
  vercel --prod
  ```
  - Follow prompts
  - Choose project name
  - Wait for build

- [ ] **Set Backend URL**
  ```bash
  vercel env add VITE_BACKEND_URL production
  ```
  - Enter your Railway URL when prompted
  - Example: `https://des646-backend.railway.app`

- [ ] **Redeploy with Environment Variable**
  ```bash
  vercel --prod
  ```

- [ ] **Get Frontend URL**
  - Vercel will show you the URL
  - Example: `https://des646-project.vercel.app`

### Part 3: Final Configuration

- [ ] **Update CORS on Backend (if needed)**
  ```bash
  railway variables set CORS_ALLOWED_ORIGINS="https://your-frontend.vercel.app"
  railway variables set CORS_ALLOW_ALL=0
  ```

- [ ] **Update ALLOWED_HOSTS on Backend**
  ```bash
  railway variables set DJANGO_ALLOWED_HOSTS=".railway.app,.vercel.app"
  ```

- [ ] **Restart Backend (if changed vars)**
  ```bash
  railway up
  ```

## 🧪 Post-Deployment Testing

### Backend Tests
- [ ] Visit backend URL
- [ ] Test health endpoint: `https://your-backend.railway.app/inference/upload_video` (should return 200)
- [ ] Check Railway logs for errors: `railway logs`

### Frontend Tests
- [ ] Visit frontend URL: `https://your-frontend.vercel.app`
- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] Upload page accessible

### Integration Tests
- [ ] Upload a small test video (< 5MB to start)
- [ ] Check browser console for errors (F12)
- [ ] Verify feedback streams appear
- [ ] Check Railway logs for backend processing
- [ ] Try a larger video
- [ ] Test different video formats if supported

### Performance Tests
- [ ] Video processing completes successfully
- [ ] Results display correctly
- [ ] No timeout errors
- [ ] Check processing time (Railway logs)

## 🔧 Troubleshooting

### Backend Issues

- [ ] **Backend not responding**
  - Check Railway logs: `railway logs`
  - Verify environment variables: `railway variables`
  - Check Railway dashboard for service status

- [ ] **Import errors**
  - Verify `requirements.txt` is complete
  - Check Python version (should be 3.10 or 3.11)
  - Redeploy: `railway up`

- [ ] **Database errors**
  - SQLite should work by default
  - Check if migrations are needed
  - Consider PostgreSQL for production

### Frontend Issues

- [ ] **Frontend shows build errors**
  - Check Vercel build logs
  - Verify all dependencies: `cd frontend && npm install`
  - Test local build: `npm run build`

- [ ] **Cannot connect to backend**
  - Verify `VITE_BACKEND_URL` is set: `vercel env ls`
  - Check browser console for CORS errors
  - Verify backend URL is correct

- [ ] **404 errors on routes**
  - Check `vercel.json` routing configuration
  - Verify build output directory is correct

### CORS Issues

- [ ] **CORS errors in browser console**
  ```bash
  # Allow all origins temporarily
  railway variables set CORS_ALLOW_ALL=1
  
  # Or set specific origin
  railway variables set CORS_ALLOWED_ORIGINS="https://your-frontend.vercel.app"
  railway variables set CORS_ALLOW_ALL=0
  ```

### Upload Issues

- [ ] **Upload fails or times out**
  - Check file size (try smaller video first)
  - Check Railway logs for processing errors
  - Verify backend has enough memory
  - Check timeout settings in `Procfile`

## 📊 Monitoring

### Check Logs Regularly

```bash
# Backend logs
railway logs --follow

# Frontend logs
vercel logs
```

### Monitor Usage

- [ ] Check Railway usage: https://railway.app
  - Monitor hours used (500/month on free tier)
  - Check memory usage
  - Watch for errors

- [ ] Check Vercel usage: https://vercel.com
  - Monitor bandwidth (100GB/month on free tier)
  - Check build minutes
  - Review analytics

## 🎯 Optimization (Optional)

- [ ] **Add custom domain to Vercel**
  - Go to Project Settings → Domains
  - Add your domain
  - Configure DNS

- [ ] **Add custom domain to Railway**
  - Go to Project Settings → Domains
  - Add your domain
  - Configure DNS

- [ ] **Enable Vercel Analytics**
  - Free for Hobby tier
  - Provides usage insights

- [ ] **Set up error monitoring**
  - Consider Sentry for error tracking
  - Monitor uptime with Uptime Robot

- [ ] **Optimize bundle size**
  ```bash
  cd frontend
  npm run build
  # Check dist/ size
  # Remove unused dependencies
  ```

## 📝 Documentation

- [ ] **Update README.md**
  - Add live demo links
  - Update deployment section
  - Add screenshots

- [ ] **Document API endpoints**
  - List all endpoints
  - Add example requests
  - Document responses

- [ ] **Create user guide**
  - How to upload videos
  - What to expect
  - Troubleshooting tips

## 🎉 Success Criteria

Your deployment is successful when:

- ✅ Frontend loads at your Vercel URL
- ✅ Backend responds at your Railway URL
- ✅ Video upload works end-to-end
- ✅ ML inference produces feedback
- ✅ Results display correctly
- ✅ No console errors
- ✅ Reasonable processing time
- ✅ Mobile responsive (bonus)

## 🆘 Need Help?

If you get stuck:

1. Check the detailed guides:
   - `SPLIT_DEPLOYMENT.md` - Full deployment guide
   - `PLATFORM_COMPARISON.md` - Platform options
   - `VERCEL_DEPLOYMENT.md` - Vercel-specific guide

2. Check service status:
   - Railway: https://railway.app/status
   - Vercel: https://www.vercel-status.com

3. Review logs:
   - Railway: `railway logs`
   - Vercel: `vercel logs` or dashboard

4. Common issues in guides have troubleshooting sections

## 📅 Maintenance

### Regular Tasks

- [ ] **Weekly**: Check logs for errors
- [ ] **Monthly**: Review usage (Railway hours, Vercel bandwidth)
- [ ] **As needed**: Update dependencies
- [ ] **As needed**: Redeploy after code changes

### Redeployment

```bash
# Update backend
git push origin main
railway up

# Update frontend
git push origin main
vercel --prod
```

Good luck! 🚀
