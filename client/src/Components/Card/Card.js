import React from "react";

const RevealCard = (props) => (

    // props may have to change once it becomes a stateful component
    // the text color will need to change to match
    //depending on how the image is stored the code will need to change to reflect it. 
    <div className="card small hoverable flow-text" id={`${props.id}`} key={`${props.id}`}>
        {/* image will eventually hold from state */}
        <div className="card-image waves-effect waves-block waves-dark">
            <img className="activator responsive-img" src={`${props.image}`} alt={`${props.beerName}`} />
        </div>

            {/* Title of Card */}
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{props.beerName}<i className="fas fa-beer right"></i></span>
        </div>

        {/* card details */}
        <div className="card-reveal scroll4">
            <h3 className="card-title grey-text text-darken-4">{props.beerName}<i className="fas fa-sort-down right"></i></h3>
            <p>{props.details}</p>
            <p>Type: {props.type}</p>
            <p>ABV: {props.abv}%</p>
            <p>IBU: {props.ibu}</p>
        
        </div>


    </div>

);

export default RevealCard