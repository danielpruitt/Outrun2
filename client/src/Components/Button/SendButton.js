import React from "react";

export const SendButton = (props) => (
    <div> 
        <button className="btn" {...props}>Send <i className="far fa-paper-plane"></i></button>

    </div>

);

export default SendButton;