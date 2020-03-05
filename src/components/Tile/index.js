import React from "react";
import "./style.css";

function Tile({ click, image }) {
    //return an image that will call the click function, passed as props, when clicked
    return (
        <div onClick={() => click(image)} className="col-4">
            <img className="mb-3 img-thumbnail" src={image} alt={image} />
        </div>
    );
}

export default Tile;
