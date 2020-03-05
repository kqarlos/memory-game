import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tile from "../../components/Tile"
import "./style.css";

const Game = (props) => {

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
        <div className="container mt-4">
            <div className="jumbotron text-center">
                {checkGameStatus()}
            </div>
        </div >
    );




}

export default Game;
