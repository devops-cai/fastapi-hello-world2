#!/bin/bash

APP_NAME="app4"
PORT=8003
LOG_FILE="/app/logs/${APP_NAME}.log"
PID_FILE="/app/logs/${APP_NAME}.pid"

mkdir -p /app/logs

echo "Starting FastAPI $APP_NAME on port $PORT..." | tee -a $LOG_FILE
uvicorn "app.${APP_NAME}:app" --host 0.0.0.0 --port $PORT 2>> $LOG_FILE &

echo $! > $PID_FILE

sleep 2

if ! pgrep -f "uvicorn app.${APP_NAME}:app"; then
    echo "Error: FastAPI $APP_NAME failed to start!" | tee -a $LOG_FILE
    exit 1
else
    echo "FastAPI $APP_NAME is running on port $PORT" | tee -a $LOG_FILE
fi

tail -f /dev/null
