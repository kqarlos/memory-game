import React from "react";
import { Link } from "react-router-dom";

const Home = ({ setTheme, startGame }) => {

    //return a jumbotron with a select option form. When the option is changed, the search function is called.
    //The search function will update the gameState

    function updateTheme(e) {
        setTheme(e.target.value);
    }

    return (
        <div>
            <h1 className="display-4">Test your memory skills with this game</h1>
            <select className="form-control form-control-lg mt-3" onChange={updateTheme}>
                <option className="text-secondary" value="coco">Pick a theme</option>
                <option value="theoffice">The Office</option>
                <option value="rickandmorty">Rick And Morty</option>
                <option value="brooklynninenine">Brooklyn Nine Nine</option>
                <option value="americandad">American Dad</option>
                <option value="parksandrec">Parks and Recreation</option>
                <option value="thesimpsons">The Simpsons</option>
                <option value="supernatural">Supernatural</option>
                <option value="adventuretime">Adventure Time</option>

            </select>
            <p className="lead py-3">

                <Link to="/memory-game/Game" onClick={startGame} className="btn btn-warning btn-lg" role="button">
                    Get Playing <i className="fas fa-gamepad"></i>
                </Link>

            </p>
        </div>
    );
}

export default Home;
