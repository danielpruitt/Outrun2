import React from "react";

const Navbar = () => ( 

    <div>
        <div className="navbar " >
            <nav className="">
                <div className="nav-wrapper purple darken-4">
                    <a href="/" className="brand-logo center hide-on-med-and-down "><img className="brandLogoFix pt" alt="OutrunNavbarLogo" src={require("../../images/Outrun Logo_Black.png")}/></a>
                    <ul className=" white light-blue-text text-darken-4 custFont">
                        <li className="">
                            <a className="white-text text-darken-4 flow-text" href="#ourbeers"><small>Our Beers</small></a>
                        </li>
                        
                        <li>
                            <a className="white-text text-darken-4 flow-text" href="#ourstory"><small>Our Story</small></a>
                        </li>
                        <li>
                            <a className="white-text text-darken-4 right flow-text" href="#contact"><small>Contact</small></a>
                        </li>
                        
                        
                    </ul>
                </div>
            </nav>
        </div>
    </div>
);

export default Navbar;