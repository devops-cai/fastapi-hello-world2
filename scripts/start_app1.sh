#!/bin/bash

# Ensure Conda is available in Git Bash
source ~/miniconda3/etc/profile.d/conda.sh  # Use ~/ if installed in your home directory
# OR use the full path if installed in C:/ProgramData/miniconda3
source /c/ProgramData/miniconda3/etc/profile.d/conda.sh

# Activate the Conda environment
conda activate fastapi

APP_NAME="app1"
PORT=8000
LOG_DIR="$HOME/app/logs"
LOG_FILE="$LOG_DIR/${APP_NAME}.log"
PID_FILE="$LOG_DIR/${APP_NAME}.pid"

mkdir -p "$LOG_DIR"

echo "Starting FastAPI $APP_NAME on port $PORT..." | tee -a "$LOG_FILE"
uvicorn "app.${APP_NAME}:app" --host 0.0.0.0 --port $PORT 2>> "$LOG_FILE" &

echo $! > "$PID_FILE"

sleep 2

if ! pgrep -f "uvicorn app.${APP_NAME}:app"; then
    echo "Error: FastAPI $APP_NAME failed to start!" | tee -a "$LOG_FILE"
    exit 1
else
    echo "FastAPI $APP_NAME is running on port $PORT" | tee -a "$LOG_FILE"
fi

tail -f /dev/null
