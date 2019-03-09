import React from "react";


const CustomCard = props => (

    <div className="customCard">
        <div className="card rounded z-depth-4" id={`${props.id}`} >
            <div className="card-image">
                <img className=" " src={`${props.image}`} alt={`${props.beerName}`} />
                <span className="card-title lazer84">{`${props.beerName}`}</span>
            </div>
            <div className="card-content">
                <p>{`${props.type}`}</p>
                <p>ABV: {`${props.abv}`}%</p>
                <p>IBU: {`${props.ibu}`}</p>
            </div>
            <div className="card-action">
                <a href="#"> Details </a>
            </div>
        </div>
    </div>

);

export default CustomCard;