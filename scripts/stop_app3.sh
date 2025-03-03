#!/bin/bash

APP_NAME="app3"
PID_FILE="/app/logs/${APP_NAME}.pid"

if [ -f "$PID_FILE" ]; then
    PID=$(cat $PID_FILE)
    echo "Stopping FastAPI $APP_NAME (PID: $PID)..."
    kill $PID

    sleep 2

    if ps -p $PID > /dev/null; then
        echo "Error: Failed to stop FastAPI $APP_NAME"
    else
        echo "FastAPI $APP_NAME stopped successfully."
        rm -f $PID_FILE
    fi
else
    echo "No running instance of $APP_NAME found!"
fi
