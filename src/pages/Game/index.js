import React from "react";
import { Link } from "react-router-dom";
import Tile from "../../components/Tile"
import "./style.css";

const Game = (props) => {

    //function checks whether the game is over, or if the result from the API call to get the images is empty.
    //If the game is over or the result is empty, this function will return a message with the score and a button to go back to the homepage
    //If the user is still playing this function will return a grid of the 9 images in the result array.
    function checkGameStatus() {
        if (props.gameOver || props.result.length === 0) {
            return (
                <div>
                    <h2 className="display-4 mb-3">GAME OVER!! You Scored {props.coins} points!</h2>

                    <Link onClick={props.resetGame} to="/memory-game/" className="btn btn-warning btn-lg" role="button">
                        Play Again <i className="fas fa-gamepad"></i>
                    </Link>

                </div>
            );

        } else if (props.playing) {
            return (

                <div>
                    <h2 className="display-4 mb-3">Click each gif only once... Go!</h2>
                    <div className="row">
                        {props.result.map((gif, i) => (
                            <Tile key={i} click={props.click} image={gif.images.original.url} />
                        ))}
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {checkGameStatus()}
        </div>
    );




}

export default Game;
