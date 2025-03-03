#!/bin/bash
PIDS=$(netstat -ano | grep ":8000" | awk '{print $NF}' | grep -E '^[1-9][0-9]*$' | sort -u)

if [[ -n "$PIDS" ]]; then
    echo "Stopping FastAPI processes: $PIDS..."
    for PID in $PIDS; do
        wmic process where "ProcessId=$PID" call terminate
    done
    echo "FastAPI stopped successfully."
else
    echo "No FastAPI process found running on port 8000."
fi
