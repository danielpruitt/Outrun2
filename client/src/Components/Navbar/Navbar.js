import React from "react";


const Navbar = () => (
    <div>
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper grey white custFont">
                <a href="/" className="brand-logo center light-blue-text text-darken-4 hide-on-med-and-down"><strong>Image</strong></a>
                    <a href="/" className="brand-logo right light-blue-text text-darken-4 hide-on-med-and-down"><strong>Outrun Brewing Co</strong></a>
                    <ul className=" white light-blue-text text-darken-4 custFont">
                        <li className="">
                            <a className="light-blue-text text-darken-4 flow-text" href="#beers"><small>Beers</small></a>
                        </li>
                        <li >
                            <a className="light-blue-text text-darken-4 flow-text" href="#ourstory"><small>Our Story</small></a>
                        </li>
                        <li>
                            <a className="light-blue-text text-darken-4 flow-text" href="#skills"><small>Location</small></a>
                        </li>
                        <li>
                            <a className="light-blue-text text-darken-4 flow-text right" href="#contact"><small>Contact</small></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    </div>
);

export default Navbar;