import React, { useContext } from "react";
import GameContext from "../../utils/GameContext";
import API from "../../utils/API";

const Game = () => {
    const gameContext = useContext(GameContext);

    return (
        <div className="container mt-4">
            <div className="jumbotron text-center">
                <h1 className="display-4">Go!</h1>
                
            </div>
        </div>
    );
}

export default Game;
