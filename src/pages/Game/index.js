import React, { Component } from "react";
import Tile from "../../components/Tile"
import "./style.css";

class Game extends Component {


    render() {
        return (
            <div className="container mt-4">
                <div className="jumbotron text-center">
                    <h1 className="display-4">Go!</h1>
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
