import React from "react";
import "./style.css";

function Tile({image}) {
    return (

        <div className="card">
            <img className="card-img-top" src={image} alt="Card image cap" />
        </div>
    );

}

export default Tile;
