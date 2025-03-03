# Use official Python image as base

#https://chatgpt.com/share/67c37454-4c10-800c-971b-47cfdf68deaf

FROM python:3.9 AS fastapi_base

# Set working directory
WORKDIR /app

# Copy only requirements.txt first (to leverage Docker layer caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application files
COPY . .

# Install procps for pgrep support
RUN apt-get update && apt-get install -y procps

# Expose ports for FastAPI services
EXPOSE 8000 8001 8002 8003

# Use official Node.js image for backend
FROM node:16 AS backend_base
WORKDIR /backend
COPY backend/package.json backend/package-lock.json ./
RUN npm install
COPY backend .
EXPOSE 5000
CMD ["node", "server.js"]

# Use official Node.js image for frontend
FROM node:16 AS frontend_base
WORKDIR /frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend .
EXPOSE 3000
CMD ["npm", "start"]

CMD ["bash"]
