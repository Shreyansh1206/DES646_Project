#!/usr/bin/env zsh
# Deploy the frontend to Vercel using existing vercel.json.
# Requires: Vercel CLI installed (`npm i -g vercel`), logged in (`vercel login`),
# and optional environment variable VITE_BACKEND_URL set for build-time override.

set -euo pipefail

ROOT_DIR="$(cd "${0:A:h}/.." && pwd)"
FRONTEND_DIR="$ROOT_DIR/frontend"

echo "[deploy_frontend] Building frontend..."
cd "$FRONTEND_DIR"
npm install --no-audit --no-fund
npm run build

echo "[deploy_frontend] Deploying to Vercel (production)..."
vercel --prod --yes

echo "[deploy_frontend] Done. If domain shows 401, disable project access protection in Vercel settings."