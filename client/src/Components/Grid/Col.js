import React from "react";

const Col = ({size, children}) => (
    // size prop allows a Matierialize grid size to be added to be added ex. s12
    // may need adjustment when needing multiple sizes, do col + size
    // <div className={`${size.split(" ").map(size=>"col " + size).join(" ")}`}>
    //     {children}
    // </div>
    <div className =  {`col ${size}`}>
        {children}
    </div>
);

export default Col;