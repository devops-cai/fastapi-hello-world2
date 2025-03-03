import React, { useState, useEffect } from "react";
import { fetchMessage1, fetchMessage2 } from "./api";

const App = () => {
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");

    useEffect(() => {
        fetchMessage1().then(data => setMessage1(data.message));
        fetchMessage2().then(data => setMessage2(data.message));
    }, []);

    return (
        <div>
            <h1>React + FastAPI</h1>
            <p>Message from FastAPI (app1): {message1}</p>
            <p>Message from FastAPI (app2): {message2}</p>
        </div>
    );
};

export default App;
