#!/usr/bin/env zsh
# Verify frontend (Vercel) and backend (Railway) health endpoints.
# Usage: FRONTEND_URL=... BACKEND_URL=... scripts/verify_stack.sh

set -euo pipefail

FRONTEND_URL=${FRONTEND_URL:-"https://kinetiform-1txsszdud-sirarthurnerdolot1s-projects.vercel.app"}
BACKEND_URL=${BACKEND_URL:-"https://kinetiform-production.up.railway.app"}

echo "[verify] Frontend: $FRONTEND_URL"
CODE_F=$(curl -s -o /dev/null -w "%{http_code}" "$FRONTEND_URL/") || CODE_F="ERR"
echo "[verify] Frontend root status: $CODE_F"

echo "[verify] Backend healthz: $BACKEND_URL/healthz"
CODE_HZ=$(curl -s -o /dev/null -w "%{http_code}" "$BACKEND_URL/healthz") || CODE_HZ="ERR"
echo "[verify] Backend /healthz status: $CODE_HZ"

echo "[verify] Backend inference health: $BACKEND_URL/inference/health/"
CODE_INF=$(curl -s -o /dev/null -w "%{http_code}" "$BACKEND_URL/inference/health/") || CODE_INF="ERR"
echo "[verify] Backend /inference/health/ status: $CODE_INF"

if [ "$CODE_F" = "200" ] && [ "$CODE_HZ" = "200" ] && [ "$CODE_INF" = "200" ]; then
  echo "[verify] ✅ All endpoints healthy."
else
  echo "[verify] ❌ Some endpoints failing. Frontend=$CODE_F healthz=$CODE_HZ inference=$CODE_INF" >&2
  exit 1
fi