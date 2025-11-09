import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Allow backend port to be configured via env (set by start.sh)
const backendPort = process.env.BACKEND_PORT || '8000'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true, // force 3000 so auto-open is reliable
    proxy: {
      '/inference': {
        // Prefer VITE_BACKEND_PORT for client visibility, fallback to BACKEND_PORT
        target: `http://127.0.0.1:${process.env.VITE_BACKEND_PORT || process.env.BACKEND_PORT || '8000'}`,
        changeOrigin: true,
      }
    }
  }
})
