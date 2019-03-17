import React from "react";

const Navbar = () => (

    <div>
        <nav>
            <div className="navbar " >
                <nav className="">
                    <div className="nav-wrapper outrunPink">

                        {/* <div className="nav-wrapper purple darken-4"> */}
                        <a href="/" className="brand-logo center hide-on-large-only "><img className="brandLogoFixOnSmall" alt="OutrunNavbarLogo" src={require("../../images/Outrun Logo_Black.png")} /></a>

                        <a href="/" className="brand-logo center hide-on-med-and-down "><img className="brandLogoFix pt" alt="OutrunNavbarLogo" src={require("../../images/Outrun Logo_Black.png")} /></a>
                        <div data-target="mobileNav" className="sidenav-trigger hide-on-large-only"><i className="fas fa-beer"></i></div>
                        <ul className=" white light-blue-text text-darken-4 custFont hide-on-med-and-down">
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
        </nav>

        <ul className="sidenav outrunPink" id="mobileNav">
            <li>
                <a href="#ourbeers">Our Beers</a>
            </li>
            <li><a href="#ourstory">Our Story</a></li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
);

export default Navbar;