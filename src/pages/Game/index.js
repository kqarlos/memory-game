import React from "react";
// import GameContext from "../../utils/GameContext";
// import API from "../../utils/API";
import Tile from "../../components/Tile"
// import Wrapper from "../../components/Wrapper";
import "./style.css";

const Game = ({ result }) => {
    console.log(result);

    return (
        <div className="container mt-4">
            <div className="jumbotron text-center">
                <h1 className="display-4">Go!</h1>
                <div className="container mt-3">
                    <div className="row">
                        {result.map(gif => (
                            <Tile image={gif.images.original.url} />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Game;
