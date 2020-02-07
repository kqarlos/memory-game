import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar bg-success justify-content-center">
            <Link to="/">
                <a className="navbar-brand py-2" href="/">
                    <span className="display-1 text-white"><i className="fas fa-brain"></i> Memory Game <i
                        className="fas fa-brain"></i></span>
                </a>
            </Link>

        </nav>
    );
}

export default Navbar;
