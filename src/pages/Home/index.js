import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GameContext from "../../utils/GameContext";
import API from "../../utils/API";


const Home = () => {
    const gameModel = useContext(GameContext);


    const search = () => {
        API.searchTiles(gameModel.theme.value)
            .then(res => {
                if (res.data.length === 0) {
                    throw new Error("No results found.");
                }
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                gameModel.result.value = res.data;
                console.log("Button Pressed");
                console.log("HOME API SEARCH RESULTS");
                console.log(res.data);
                console.log("HOME GAME MODEL");
                console.log(gameModel);


            })
            .catch(err => gameModel.setError(err));
    }


    return (
        <div className="container mt-4">
            <div className="jumbotron text-center">
                <h1 className="display-4">Test your memory skills with this game</h1>
                <p className="lead my-2">Select your theme:</p>
                <select className="form-control form-control-lg" {...gameModel.theme}>
                    <option>Theme 1</option>
                    <option>Theme 2</option>
                    <option>Theme 3</option>
                    <option>Theme 4</option>
                    <option>Theme 5</option>
                </select>
                <p className="lead py-3">
                    <Link to="/Game">
                        <a className="btn btn-warning btn-lg" onClick={() => search()} role="button">Get Playing <i className="fas fa-gamepad"></i>
                        </a>
                    </Link>

                </p>
            </div>
        </div>
    );
}

export default Home;
