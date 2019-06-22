import React from "react";
import "./Nav.css"
const Navbar = () => (

    <div className='stickyNav'>
        
            <div className="navbar" >
                <nav>
                    <div className="nav-wrapper outrunPink">

                        {/* <div className="nav-wrapper purple darken-4"> */}
                        <a href="/" className="brand-logo center hide-on-large-only "><img className="brandLogoFixOnSmall" alt="OutrunNavbarLogo" src={require("../../images/Outrun Logo_Black.png")} /></a>

                        <a href="/" className="brand-logo center hide-on-med-and-down "><img className="brandLogoFix " alt="OutrunNavbarLogo" src={require("../../images/Outrun Logo_Black.png")} /></a>
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
        

        <div id="SideNav">

            <ul className="sidenav black" id="mobileNav">
                <li>
                    <a className="white-text text-darken-4" href="#ourbeers">Our Beers</a>
                </li>
                <li><a href="#ourstory">Our Story</a></li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <a>
                    <img src={require("../../images/Gazelle Logo_Pink.png")} className="sideNavImg" alt="Outrun GazelleImg" />

                </a>
                <li>
                    <a href="https://www.instagram.com/outrunbrewingco/"> @OutrunBrewingCo </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/OutrunBrewingCo"> facebook.com/OutrunBrewingCo</a>
                </li>
                <li>
                    <a>5368 East Mountain Street</a>
                    <a>Stone Mountain, Ga 30083</a>
                    {/* @OutrunBrewingCo <i className="fab fa-twitter-square"></i> */}
                </li>

            </ul>

        </div>
    </div>
);

export default Navbar;