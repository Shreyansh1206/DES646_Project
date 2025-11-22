#!/usr/bin/env bash
# Setup script for DES646 Project
# Installs all dependencies and prepares the environment

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

echo -e "${BLUE}🔧 DES646 Project Setup${NC}\n"

# Check if conda is available
USING_CONDA=false
if command -v conda &> /dev/null; then
    echo -e "${GREEN}✓ Found conda${NC}"
    USING_CONDA=true
    
    # Check for existing environment
    if conda env list | grep -q "mp-env"; then
        echo -e "${YELLOW}⚠️  Conda environment 'mp-env' already exists${NC}"
        read -p "Do you want to recreate it? (y/N): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            echo -e "${BLUE}Removing existing environment...${NC}"
            conda env remove -n mp-env -y
            echo -e "${BLUE}Creating new conda environment with Python 3.11...${NC}"
            conda create -n mp-env python=3.11 -y
        else
            echo -e "${GREEN}Using existing environment${NC}"
        fi
    else
        echo -e "${BLUE}Creating conda environment 'mp-env' with Python 3.11...${NC}"
        conda create -n mp-env python=3.11 -y
    fi
    
    echo -e "${BLUE}Installing Python dependencies...${NC}"
    conda run -n mp-env pip install -r requirements.txt
    echo -e "${GREEN}✓ Python dependencies installed in conda environment 'mp-env'${NC}"
    
else
    echo -e "${YELLOW}⚠️  conda not found. Using venv instead.${NC}"
    
    # Check for Python 3.11 or 3.10
    PYTHON_CMD=""
    if command -v python3.11 &> /dev/null; then
        PYTHON_CMD="python3.11"
        echo -e "${GREEN}✓ Found Python 3.11${NC}"
    elif command -v python3.10 &> /dev/null; then
        PYTHON_CMD="python3.10"
        echo -e "${GREEN}✓ Found Python 3.10${NC}"
    elif command -v python3 &> /dev/null; then
        # Check if python3 is 3.10 or 3.11
        PY_VERSION=$(python3 -c "import sys; print(f'{sys.version_info.major}.{sys.version_info.minor}')")
        if [[ "$PY_VERSION" == "3.10" ]] || [[ "$PY_VERSION" == "3.11" ]]; then
            PYTHON_CMD="python3"
            echo -e "${GREEN}✓ Found Python $PY_VERSION${NC}"
        else
            echo -e "${RED}✗ Python 3.10 or 3.11 required. Found Python $PY_VERSION${NC}"
            echo -e "${YELLOW}   Please install Python 3.11 or use conda${NC}"
            exit 1
        fi
    else
        echo -e "${RED}✗ Python 3.10 or 3.11 not found${NC}"
        echo -e "${YELLOW}   Please install Python 3.11 or use conda${NC}"
        exit 1
    fi
    
    # Create virtual environment
    if [ -d ".venv" ]; then
        echo -e "${YELLOW}⚠️  Virtual environment '.venv' already exists${NC}"
        read -p "Do you want to recreate it? (y/N): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            echo -e "${BLUE}Removing existing virtual environment...${NC}"
            rm -rf .venv
            echo -e "${BLUE}Creating new virtual environment...${NC}"
            $PYTHON_CMD -m venv .venv
        else
            echo -e "${GREEN}Using existing virtual environment${NC}"
        fi
    else
        echo -e "${BLUE}Creating virtual environment...${NC}"
        $PYTHON_CMD -m venv .venv
    fi
    
    echo -e "${BLUE}Installing Python dependencies...${NC}"
    .venv/bin/pip install --upgrade pip
    .venv/bin/pip install -r requirements.txt
    echo -e "${GREEN}✓ Python dependencies installed in .venv${NC}"
fi

# Check for Node.js and npm
if ! command -v npm &> /dev/null; then
    echo -e "${RED}✗ npm not found${NC}"
    echo -e "${YELLOW}   Please install Node.js from https://nodejs.org/${NC}"
    exit 1
fi

NODE_VERSION=$(node -v)
echo -e "${GREEN}✓ Found Node.js $NODE_VERSION${NC}"

# Install frontend dependencies
echo -e "${BLUE}Installing frontend dependencies...${NC}"
cd frontend
npm install
cd ..
echo -e "${GREEN}✓ Frontend dependencies installed${NC}"

# Create necessary directories
echo -e "${BLUE}Creating necessary directories...${NC}"
mkdir -p Model/Input_Video
mkdir -p tts_output
echo -e "${GREEN}✓ Directories created${NC}"

# Run Django migrations
echo -e "${BLUE}Running Django migrations...${NC}"
if [ "$USING_CONDA" = true ]; then
    conda run -n mp-env python webapp/manage.py migrate
else
    .venv/bin/python webapp/manage.py migrate
fi
echo -e "${GREEN}✓ Django migrations completed${NC}"

# Summary
echo -e "\n${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✓ Setup Complete!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"

if [ "$USING_CONDA" = true ]; then
    echo -e "${BLUE}To start the application:${NC}"
    echo -e "  ${YELLOW}./start.sh${NC}"
    echo -e "\n${BLUE}Or manually:${NC}"
    echo -e "  ${YELLOW}conda activate mp-env${NC}"
    echo -e "  ${YELLOW}cd webapp && python manage.py runserver${NC} (in one terminal)"
    echo -e "  ${YELLOW}cd frontend && npm start${NC} (in another terminal)"
else
    echo -e "${BLUE}To start the application:${NC}"
    echo -e "  ${YELLOW}./start.sh${NC}"
    echo -e "\n${BLUE}Or manually:${NC}"
    echo -e "  ${YELLOW}source .venv/bin/activate${NC}"
    echo -e "  ${YELLOW}cd webapp && python manage.py runserver${NC} (in one terminal)"
    echo -e "  ${YELLOW}cd frontend && npm start${NC} (in another terminal)"
fi

echo -e "\n${BLUE}The application will be available at:${NC}"
echo -e "  Frontend: ${YELLOW}http://localhost:3000${NC}"
echo -e "  Backend:  ${YELLOW}http://127.0.0.1:8000${NC}\n"
