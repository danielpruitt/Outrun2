import React from "react";


const CustomCard = props => (

    <div className="customCard">
        <div className="card rounded z-depth-4" id={`${props.id}`} >
            <div className="card-image">
                <img className="activator " src={`${props.image}`} alt={`${props.beerName}`} />
                <span className="card-title lazer84">{`${props.beerName}`}</span>
            </div>
            <div className="card-content">
            <span className='card-title activator grey-text text-darken-4 '>{`${props.beerName}`} </span>
                <p>{`${props.type}`}</p>
                <p>ABV: {`${props.abv}`}%</p>
                <p>IBU: {`${props.ibu}`}</p>
            </div>
            <div className="card-reveal">
                <span className='card-title grey-text text-darken-4'> {`${props.beerName}`}</span>
                <p className='abyssopelagic'> {`${props.details}`}</p>
            </div>
        </div>
    </div>

);

export default CustomCard;