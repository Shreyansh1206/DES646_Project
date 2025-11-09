import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Allow backend port to be configured via env (set by start.sh)
const backendPort = process.env.BACKEND_PORT || '8000'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [react()],
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
  // In production we expect VITE_BACKEND_URL to be set and fetch used directly.
})
