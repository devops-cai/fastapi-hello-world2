import { useEffect, useState } from "react";

function Route1() {
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/Server1");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setMessage(data.message);
            } catch (error) {
                console.error("Error fetching data:", error);
                setMessage("Failed to load message");
            } finally {
                setLoading(false);
            }
        };

        fetchMessage();
    }, []);

    return (
        <div>
            <h1>FastAPI Route 1</h1>
            {loading ? <p>Loading...</p> : <p>{message}</p>}
        </div>
    );
}

export default Route1;
