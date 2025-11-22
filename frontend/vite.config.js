import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Allow backend port to be configured via env (set by start.sh)
const backendPort = process.env.BACKEND_PORT || '8000'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: !isProd ? {
    port: 3000,
    strictPort: true,
    proxy: {
      '/inference': {
        target: `http://127.0.0.1:${process.env.VITE_BACKEND_PORT || process.env.BACKEND_PORT || '8000'}`,
        changeOrigin: true,
      }
    }
  } : undefined,
  // In production (Vercel), API calls go to /inference which routes to /api/index.py
  // The VITE_BACKEND_URL env var is not needed on Vercel
})
