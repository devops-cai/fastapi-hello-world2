const API_BASE_URL = "http://localhost:8000"; // Update with FastAPI's URL

export const fetchMessage1 = async () => {
    const response = await fetch(`${API_BASE_URL}/api/message1`);
    return response.json();
};

export const fetchMessage2 = async () => {
    const response = await fetch(`${API_BASE_URL}/api/message2`);
    return response.json();
};
