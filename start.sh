#!/usr/bin/env bash
# Combined start script for DES646 Project
# Launches Django backend and Vite frontend in parallel

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Get script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

echo -e "${BLUE}🚀 Starting DES646 Project...${NC}\n"

# Check Python version
PYTHON_CMD=""
if command -v conda &> /dev/null; then
    echo -e "${GREEN}✓ Found conda${NC}"
    if conda env list | grep -q "mp-env"; then
        echo -e "${GREEN}✓ Using conda environment: mp-env${NC}"
        PYTHON_CMD="conda run -n mp-env python"
    elif conda env list | grep -q "des646-py311"; then
        echo -e "${GREEN}✓ Using conda environment: des646-py311${NC}"
        PYTHON_CMD="conda run -n des646-py311 python"
    else
        echo -e "${YELLOW}⚠️  No conda environment found (mp-env or des646-py311)${NC}"
        echo -e "${YELLOW}   Create one with: conda create -n mp-env python=3.11 -y${NC}"
        echo -e "${YELLOW}   Then install deps: conda activate mp-env && pip install -r requirements.txt${NC}"
        exit 1
    fi
else
    # Try venv or system Python
    if [ -d ".venv" ]; then
        echo -e "${GREEN}✓ Using virtual environment: .venv${NC}"
        PYTHON_CMD=".venv/bin/python"
        # Check Python version
        PY_VERSION=$($PYTHON_CMD -c "import sys; print(f'{sys.version_info.major}.{sys.version_info.minor}')")
        if [[ "$PY_VERSION" == "3.10" ]] || [[ "$PY_VERSION" == "3.11" ]]; then
            echo -e "${GREEN}✓ Python $PY_VERSION (compatible)${NC}"
        else
            echo -e "${YELLOW}⚠️  Python $PY_VERSION detected${NC}"
            echo -e "${YELLOW}   MediaPipe requires Python 3.10 or 3.11${NC}"
            echo -e "${YELLOW}   Consider using conda: conda create -n mp-env python=3.11 -y${NC}"
        fi
    else
        echo -e "${RED}✗ No Python environment found${NC}"
        echo -e "${YELLOW}   Create a conda environment: conda create -n mp-env python=3.11 -y${NC}"
        echo -e "${YELLOW}   Or create a venv: python3.11 -m venv .venv${NC}"
        exit 1
    fi
fi

# Validate selected Python command actually runs
if ! $PYTHON_CMD -c "import sys; print(sys.version)" >/dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  Selected Python command failed to run. Attempting fallback...${NC}"
    if command -v python3 >/dev/null 2>&1; then
        PYTHON_CMD="python3"
        echo -e "${GREEN}✓ Falling back to system python3${NC}"
    elif [ -x ".venv/bin/python" ]; then
        PYTHON_CMD=".venv/bin/python"
        echo -e "${GREEN}✓ Falling back to .venv/bin/python${NC}"
    else
        echo -e "${RED}✗ No working Python interpreter found${NC}"
        exit 1
    fi
    # Re-validate fallback
    if ! $PYTHON_CMD -c "import sys; print(sys.version)" >/dev/null 2>&1; then
        echo -e "${RED}✗ Fallback Python interpreter is not working either${NC}"
        exit 1
    fi
fi

# Check if Node.js is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}✗ npm not found. Please install Node.js${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Found npm${NC}"

# Install frontend dependencies if needed
if [ ! -d "frontend/node_modules" ]; then
    echo -e "${BLUE}📦 Installing frontend dependencies...${NC}"
    cd frontend
    npm install
    cd ..
fi

echo -e "\n${BLUE}Starting services...${NC}\n"

# Function to handle cleanup on exit
cleanup() {
    echo -e "\n${YELLOW}Stopping services...${NC}"
    kill $(jobs -p) 2>/dev/null || true
    exit 0
}

trap cleanup SIGINT SIGTERM

# Proactively stop lingering dev servers to avoid port confusion
echo -e "${YELLOW}Checking for lingering dev servers...${NC}"
pkill -f "/frontend/node_modules/.bin/vite" 2>/dev/null || true
pkill -f "manage.py runserver" 2>/dev/null || true
sleep 0.5

# Hard kill any listeners on typical ports (frontend 3000/3001/5173, backend 8000-8009)
for p in 3000 3001 5173; do
    if lsof -tiTCP:$p >/dev/null 2>&1; then
        lsof -tiTCP:$p | xargs kill -9 2>/dev/null || true
    fi
done
for p in 8000 8001 8002 8003 8004 8005 8006 8007 8008 8009; do
    if lsof -tiTCP:$p >/dev/null 2>&1; then
        lsof -tiTCP:$p | xargs kill -9 2>/dev/null || true
    fi
done
sleep 0.5

# Find a free backend port starting from 8000
find_free_port() {
    for p in 8000 8001 8002 8003 8004 8005 8006 8007 8008 8009; do
        if ! lsof -iTCP:$p -sTCP:LISTEN >/dev/null 2>&1; then
            echo $p
            return 0
        fi
    done
    return 1
}

BACKEND_PORT=$(find_free_port)
if [ -z "$BACKEND_PORT" ]; then
    echo -e "${RED}✗ No free backend port found in 8000-8009${NC}"
    exit 1
fi
export BACKEND_PORT

# Start Django backend
echo -e "${GREEN}[Backend]${NC} Starting Django server on http://127.0.0.1:${BACKEND_PORT}"
cd webapp
$PYTHON_CMD manage.py runserver 127.0.0.1:${BACKEND_PORT} 2>&1 | sed "s/^/$(echo -e ${GREEN})[Backend]$(echo -e ${NC}) /" &
BACKEND_PID=$!
cd ..

# Wait for backend to listen
wait_for_backend() {
    for i in {1..20}; do
        if command -v nc >/dev/null 2>&1; then
            nc -z 127.0.0.1 ${BACKEND_PORT} && return 0
        else
            lsof -iTCP:${BACKEND_PORT} -sTCP:LISTEN >/dev/null 2>&1 && return 0
        fi
        sleep 0.5
    done
    return 1
}

if ! wait_for_backend; then
    echo -e "${RED}✗ Backend failed to start on port ${BACKEND_PORT}${NC}"
    echo -e "${YELLOW}Continuing to start frontend; the UI will show backend as unreachable.${NC}"
fi

# Start Vite frontend
echo -e "${BLUE}[Frontend]${NC} Starting Vite dev server (proxy -> http://127.0.0.1:${BACKEND_PORT})"
cd frontend
BACKEND_PORT=${BACKEND_PORT} VITE_BACKEND_PORT=${BACKEND_PORT} npm start 2>&1 | sed "s/^/$(echo -e ${BLUE})[Frontend]$(echo -e ${NC}) /" &
FRONTEND_PID=$!
cd ..

echo -e "\n${GREEN}✓ Both services started${NC}"
echo -e "${YELLOW}Access the app at: http://localhost:3000 (or the next available port)${NC}"
echo -e "${YELLOW}Press Ctrl+C to stop both services${NC}\n"

# Auto-open browser when frontend is ready (macOS 'open')
wait_for_frontend() {
    for i in {1..40}; do
        if lsof -iTCP:3000 -sTCP:LISTEN >/dev/null 2>&1; then
            return 0
        fi
        sleep 0.25
    done
    return 1
}

if command -v open >/dev/null 2>&1; then
    if wait_for_frontend; then
        open "http://localhost:3000" >/dev/null 2>&1 || true
    fi
fi

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
