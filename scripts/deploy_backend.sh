#!/usr/bin/env zsh
# Trigger Railway backend deployment.
# Requires: Railway CLI installed (`npm i -g @railway/cli`) and authenticated (`railway login`).
# Expects the project to be initialized (railway init) previously.

set -euo pipefail

echo "[deploy_backend] Checking Procfile"
if ! grep -q "web: gunicorn webapp.webapp.wsgi:application" Procfile 2>/dev/null; then
  echo "[deploy_backend] WARNING: Procfile does not contain expected gunicorn line." >&2
fi

echo "[deploy_backend] Environment variable checklist (must be set in Railway dashboard):"
echo "  DJANGO_SECRET_KEY (random)"
echo "  DJANGO_ALLOWED_HOSTS=<railway-domain>"
echo "  DJANGO_DEBUG=0"
echo "  Optionally: CORS_ALLOWED_ORIGINS=<frontend-domain>"

echo "[deploy_backend] Triggering deployment..."
railway up

echo "[deploy_backend] After deploy run scripts/verify_stack.sh to confirm health."