import React from "react";

const ImageCard = props => (

    <div className="card">
        <div className="card-image">
            <img src={`${props.image}`} alt={`${props.beerName}`} className="responsive-img" />
            <span className="card-title">{props.beerName}</span>
        </div>
        <div className="card-content">
            <p>{props.details}</p>
            <p>Type: {props.type}</p>
            <p>ABV: {props.abv}%</p>
            <p>IBU: {props.ibu}</p>
        </div>
    </div>

);

export default ImageCard;