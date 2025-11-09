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
# Note: conda run can be slow, so we skip the validation for conda
if [[ ! "$PYTHON_CMD" =~ "conda run" ]]; then
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
lsof -tiTCP:8000 | xargs kill -9 2>/dev/null || true
lsof -tiTCP:3000 | xargs kill -9 2>/dev/null || true
pkill -f "manage.py runserver" 2>/dev/null || true
pkill -f "node.*vite" 2>/dev/null || true
sleep 1

# Start Django backend on port 8000
echo -e "${GREEN}[Backend]${NC} Starting Django server on http://127.0.0.1:8000"
$PYTHON_CMD webapp/manage.py runserver 127.0.0.1:8000 > backend.log 2>&1 &
BACKEND_PID=$!
echo -e "${GREEN}[Backend]${NC} PID: $BACKEND_PID"

# Wait for backend to listen
echo -e "${YELLOW}Waiting for backend to start...${NC}"
wait_for_backend() {
    for i in {1..30}; do
        if lsof -iTCP:8000 -sTCP:LISTEN >/dev/null 2>&1; then
            return 0
        fi
        sleep 0.5
    done
    return 1
}

if wait_for_backend; then
    echo -e "${GREEN}✓ Backend is ready on http://127.0.0.1:8000${NC}"
else
    echo -e "${RED}✗ Backend failed to start${NC}"
    echo -e "${YELLOW}Check backend.log for errors${NC}"
    tail -20 backend.log
    exit 1
fi

# Start Vite frontend on port 3000
echo -e "${BLUE}[Frontend]${NC} Starting Vite dev server on http://localhost:3000"
cd frontend
npm run dev > frontend.log 2>&1 &
FRONTEND_PID=$!
echo -e "${BLUE}[Frontend]${NC} PID: $FRONTEND_PID"
cd ..

echo -e "\n${GREEN}✓ Both services starting...${NC}"
echo -e "${YELLOW}Backend:  http://localhost:8000${NC}"
echo -e "${YELLOW}Frontend: http://localhost:3000${NC}"
echo -e "${YELLOW}Press Ctrl+C to stop both services${NC}\n"

# Wait for frontend to be ready, then open browser
echo -e "${YELLOW}Waiting for frontend to start...${NC}"
wait_for_frontend() {
    for i in {1..40}; do
        if lsof -iTCP:3000 -sTCP:LISTEN >/dev/null 2>&1; then
            return 0
        fi
        sleep 0.5
    done
    return 1
}

if wait_for_frontend; then
    echo -e "${GREEN}✓ Frontend is ready on http://localhost:3000${NC}\n"
    # Auto-open browser (macOS)
    if command -v open >/dev/null 2>&1; then
        echo -e "${BLUE}🌐 Opening browser...${NC}"
        sleep 1
        open "http://localhost:3000" >/dev/null 2>&1 || true
    fi
else
    echo -e "${YELLOW}⚠️  Frontend may still be starting. Check frontend.log${NC}"
    tail -10 frontend/frontend.log 2>/dev/null || true
fi

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
