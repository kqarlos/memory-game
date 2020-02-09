import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tile from "../../components/Tile"
import "./style.css";

class Game extends Component {

    renderPage() {
        if (this.props.gameOver) {
            return (
                <div>
                    <h1 className="display-4 mb-3">GAME OVER!!</h1>
                    <Link to="/memory-game/" className="btn btn-warning btn-lg" role="button">
                        Go Back <i className="fas fa-gamepad"></i>
                    </Link>
                </div>
            );
        } else {
            return (<h1 className="display-4 mb-3">Click each image only once... Go!</h1>)
        }
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="jumbotron text-center">
                    {this.renderPage()}
                    <div className="container mt-3">
                        <div className="row">
                            {this.props.result.map((gif) => (
                                <Tile click={this.props.click} image={gif.images.original.url} />
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        );
    }


}

export default Game;
