import { useState } from "react";

const GameModel = () => {
    const [themeState, setTheme] = useState("");
    const [resultState, setResult] = useState([]);

    return {
        theme: {
            value: themeState,
            onChange: e => setTheme(e.target.value)
        },
        result: {
            value: resultState,
            onChange: e => setResult(e.target.value)
        }
    };
};

export default GameModel;
