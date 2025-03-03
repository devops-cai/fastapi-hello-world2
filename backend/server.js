const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());

const apis = [
  { name: "API 1", url: "http://fastapi_app1:8000/" },
  { name: "API 2", url: "http://fastapi_app2:8001/" },
  { name: "API 3", url: "http://fastapi_app3:8002/" },
  { name: "API 4", url: "http://fastapi_app4:8003/" }
];

app.get('/fetch-messages', async (req, res) => {
  try {
    const responses = await Promise.all(apis.map(api => axios.get(api.url).then(resp => ({ name: api.name, message: resp.data.message }))));
    res.json(responses);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from FastAPI services" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
