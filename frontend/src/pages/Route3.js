import { useEffect, useState } from "react";

function Route3() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api/Server3")
            .then(res => res.json())
            .then(data => setMessage(data.message))
            .catch(err => console.error("Error:", err));
    }, []);

    return (
        <div>
            <h1>FastAPI Route 3</h1>
            <p>{message}</p>
        </div>
    );
}

export default Route3;
