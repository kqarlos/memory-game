import React from "react";
import { Link } from "react-router-dom";
import "./style.css"


function Navbar() {
    return (
        <nav className="navbar bg-success justify-content-center">
            <Link className="navbar-brand py-2" to="/">
                    <span className="display-1 text-white"><i className="fas fa-brain"></i> Memory Game <i
                        className="fas fa-brain"></i></span>
            </Link>

        </nav>
    );
}

export default Navbar;
