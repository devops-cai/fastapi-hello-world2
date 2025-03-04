from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI 2!"}

@app.get("/api/message2")
def get_message():
    return {"message1": "Message from app2.py"}
