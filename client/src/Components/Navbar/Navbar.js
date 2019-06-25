import React from "react";
import "./Nav.css"
import MobileNav from "./Sidenav.1";
const Navbar = () => (

    <div className='stickyNav'>

        <div className="navbar hide-on-med-and-down" >
            <nav>
                <div className="nav-wrapper outrunPink">

                    {/* <div className="nav-wrapper purple darken-4"> */}
                    {/* <a href="/" className="brand-logo center hide-on-large-only "><img className="brandLogoFixOnSmall" alt="OutrunNavbarLogo" src={require("../../images/Outrun Logo_Black.png")} /></a> */}

                    <a href="/" className="brand-logo center hide-on-med-and-down "><img className="brandLogoFix " alt="OutrunNavbarLogo" src={require("../../images/Outrun Logo_Black.png")} /></a>
                    {/* <div data-target="slide-out" className="sidenav-trigger hide-on-large-only"><i className="fas fa-beer"></i></div> */}
                    <ul className=" white light-blue-text text-darken-4 custFont ">
                        {/* <ul className=" white light-blue-text text-darken-4 custFont hide-on-med-and-down"> */}

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


        <div id='mobileNav' className='stickyNavMini navbar hide-on-large-only'>
            <nav>
                <div className='nav-wrapper outrunPink'>
                    <ul className='navbar-ul'>
                        <li>
                            <a className="white-text text-darken-4 flow-text" href="#ourbeers">Our Beers</a>
                        </li>
                        <li>
                            <a className="white-text text-darken-4 flow-text" href="#ourstory">Our Story</a>
                        </li>
                        <li>
                            <a className="white-text  text-darken-4 right flow-text" href="#contact">Contact</a>
                        </li>
                    </ul>
                    <img className="  brandLogoFixOnSmall" alt="OutrunNavbarLogo" src={require("../../images/Outrun Logo_Black.png")} />
                
                </div>
            </nav>
        </div>

    </div>
);

export default Navbar;