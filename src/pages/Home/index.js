import React from "react";
import { Link } from "react-router-dom";

const Home = ({ search }) => {

    return (
        <div className="container mt-4">
            <div className="jumbotron text-center">
                <h1 className="display-4">Test your memory skills with this game</h1>
                <p className="lead my-2">Select your theme:</p>
                <select className="form-control form-control-lg" onChange={search}>
                    <option value=""></option>
                    <option value="theoffice">The Office</option>
                    <option value="brooklynninenine">Brooklyn Nine Nine</option>
                    <option value="parksandrec">Parks and Recreation</option>
                    <option value="rickandmorty">Rick And Morty</option>
                    <option value="supernatural">Supernatural</option>
                </select>
                <p className="lead py-3">

                    <Link to="/Game" className="btn btn-warning btn-lg" role="button">
                        Get Playing <i className="fas fa-gamepad"></i>
                    </Link>

                </p>
            </div>
        </div>
    );
}

export default Home;
