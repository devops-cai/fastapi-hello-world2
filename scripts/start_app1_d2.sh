#!/bin/bash

# Activate the conda environment
source ~/miniconda3/etc/profile.d/conda.sh
#source /c/Users/chandrika/.conda/etc/profile.d/conda.sh
conda activate fastapi

# Run Uvicorn
python -m uvicorn app1:app --host 0.0.0.0 --port 8000 --reload

#/c/Users/chandrika/.conda/envs/fastapi/python -m uvicorn app1:app --host 0.0.0.0 --port 8000 --reload
#path