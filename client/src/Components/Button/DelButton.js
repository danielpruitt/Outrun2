import React from "react";

const DelButton = props => ( 
    <div> 
        <button className="btn red darken-4" {...props}><i className="fas fa-trash"></i></button>
    </div>
);

export default DelButton;