import React from "react";
import './Nav.css'

const MobileNav = () => (

    <div className='stickyNav'>
        <div className='navbar'>
        <nav>
            <div class="nav-wrapper outrunPink">
                <a href="/" className="brand-logo center hide-on-large-only "><img className="brandLogoFixOnSmall" alt="OutrunNavbarLogo" src={require("../../images/Outrun Logo_Black.png")} /></a>

                <a href="/" className="brand-logo center hide-on-med-and-down "><img className="brandLogoFix " alt="OutrunNavbarLogo" src={require("../../images/Outrun Logo_Black.png")} /></a>
                <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">beers</i></a>
                <ul class="right hide-on-med-and-down">
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
                <ul class="side-nav" id="mobile-demo">
                    <li>
                        <a className="white-text text-darken-4" href="#ourbeers">Our Beers</a>
                    </li>
                    <li>
                        <a className="white-text text-darken-4" href="#ourstory" onClick={() => (console.log('click'))}
                        >Our Story</a>
                    </li>
                    <li>
                        <a className="white-text text-darken-4" href="#contact">Contact</a>
                    </li>
                    <a>
                        <img src={require("../../images/Gazelle Logo_Pink.png")} className="sideNavImg" alt="Outrun GazelleImg" />
                    </a>
                    <li>
                        <a className="white-text text-darken-4" href="https://www.instagram.com/outrunbrewingco/"> @OutrunBrewingCo </a>
                    </li>
                    <li>
                        <a className="white-text text-darken-4" href="https://www.facebook.com/OutrunBrewingCo"> facebook.com/OutrunBrewingCo</a>
                    </li>
                    <li className="white-text text-darken-4">
                        <a>5368 East Mountain Street</a>
                        <a>Stone Mountain, Ga 30083</a>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    </div>
);

export default MobileNav;