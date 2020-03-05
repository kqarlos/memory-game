import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tile from "../../components/Tile"
import "./style.css";

class Game extends Component {


    checkGameStatus() {
        console.log("Props", this.props);
        if (this.props.gameOver || this.props.result.length === 0) {
            return (
                <div>
                    <h2 className="display-4 mb-3">GAME OVER!! You Scored {this.props.coins} points!</h2>

                    <Link onClick={this.props.resetGame} to="/" className="btn btn-warning btn-lg" role="button">
                        Play Again <i className="fas fa-gamepad"></i>
                    </Link>

                </div>
            );

        } else if (this.props.playing) {
            return (

                <div>
                    <h2 className="display-4 mb-3">Click each gif only once... Go!</h2>
                    <div className="row">
                        {this.props.result.map((gif, i) => (
                            <Tile key={i} click={this.props.click} image={gif.images.original.url} />
                        ))}
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="jumbotron text-center">

                    {this.checkGameStatus()}

                </div>
            </div >
        );
    }


}

export default Game;
