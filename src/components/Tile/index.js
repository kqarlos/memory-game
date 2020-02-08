import React from "react";
import "./style.css";

function Tile({ image }) {
    return (
            <div className="col-4">
                <img className="mb-3 img-thumbnail" src={image} alt={image} />
            </div>
    );
}

export default Tile;
