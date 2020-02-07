import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div class="container mt-4">
            <div class="jumbotron text-center y">
                <h1 class="display-4">Test your memory skills with this game</h1>
                <p class="lead my-2"></p>
                <p class="lead py-3">
                    <Link to="/Game">
                        <a class="btn btn-warning btn-lg" role="button">Get Playing <i class="fas fa-gamepad"></i>
                        </a>
                    </Link>

                </p>
            </div>
        </div>
    );
}

export default Home;
