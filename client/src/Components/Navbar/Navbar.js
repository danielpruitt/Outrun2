import React from "react";

const Navbar = () => ( 

    <div>
        <div className="navbar">
            <nav>
                <div className="nav-wrapper grey">
                    <a href="/" className="brand-logo center hide-on-med-and-down"><img className="brandLogoFix"  src={require("../../images/Outrun Logo_Black.png")}/></a>
                    <ul className=" white light-blue-text text-darken-4 custFont">
                        <li className="">
                            <a className="light-blue-text text-darken-4 flow-text" href="#ourbeers"><small>Our Beers</small></a>
                        </li>
                        
                        <li >
                            <a className="light-blue-text text-darken-4 flow-text" href="#ourstory"><small>Our Story</small></a>
                        </li>
                        
                        
                    </ul>
                </div>
            </nav>
        </div>
    </div>
);

export default Navbar;