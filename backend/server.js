const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:8000","http://localhost:8001"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Server running on port 8080");
});

// ✅ Improved Error Logging
app.get("/api/server1", async (req, res) => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/message1");
        res.json({ message: response.data.message1 });
    } catch (error) {
        console.error("Error fetching from FastAPI:", error.message);
        res.status(500).json({ error: "Failed to fetch from FastAPI Server 1" });
    }
});

app.get("/api/server2", async (req, res) => {
    try {
        const response = await axios.get("http://127.0.0.1:8001/api/message2");
        res.json({ message: response.data.message1 });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch from FastAPI Server 2" });
    }
});

app.get("/api/server3", async (req, res) => {
    try {
        const response = await axios.get("http://127.0.0.1:8002/");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch from FastAPI Server 3" });
    }
});

app.get("/api/server4", async (req, res) => {
    try {
        const response = await axios.get("http://127.0.0.1:8003/");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch from FastAPI Server 4" });
    }
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Node.js server running on ${PORT}`);
});