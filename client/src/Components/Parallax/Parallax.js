import React from "react";

const Parallax = (props) => (
    <div className="parallax-container">
        <div className="parallax">
            <img src={`${props.image}`} alt="Background Parallax" className="responsive-img" />
        </div>
    </div>

);

export default Parallax;