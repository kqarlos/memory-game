import React from "react";

const GameContext = React.createContext({
    theme: {
        value: "",
        onChange: () => { }
    },
    result: {
        value: [],
        onChange: () => { }
    }
});

export default GameContext;
