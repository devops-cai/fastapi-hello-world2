#!/bin/bash

# Activate the conda environment
source /c/Users/Himanshu/.conda/etc/profile.d/conda.sh
conda activate fastapi

# Run Uvicorn
/c/Users/Himanshu/.conda/envs/fastapi/python -m uvicorn app1:app --host 0.0.0.0 --port 8000 --reload
path