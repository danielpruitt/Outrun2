import React from "react";
import './Nav.css'

const Sidenav = () => (

    <div>
        <ul id='slide-out' className='side-nav'>
            <li>
                <a className="white-text text-darken-4" href="#ourbeers">Our Beers</a>
            </li>
            <li>
                <a href="#ourstory">Our Story</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>  

        </ul>
    </div>




    // <div id="SideNav">

    //     <ul className="sidenav black" id="mobileNav">
    //         <li>
    //             <a className="white-text text-darken-4" href="#ourbeers">Our Beers</a>
    //         </li>
    //         <li><a href="#ourstory">Our Story</a></li>
    //         <li>
    //             <a href="#contact">Contact</a>
    //         </li>

    //         <img src={require("../../images/Gazelle Logo_Green.png")} className="sideNavImg" alt="Outrun GazelleImg" />
    //         <li>
    //             <a href="https://www.instagram.com/outrunbrewingco/">@OutrunBrewingCo </a>
    //         </li>
    //         <li>
    //             <a href="https://www.facebook.com/OutrunBrewingCo" >facebook.com/OutrunBrewingCo</a> 
    //         </li>
    //         <li>
    //             <p>5368 East Mountain Street StoneMountain, Ga 30083</p>
    //             {/* @OutrunBrewingCo <i className="fab fa-twitter-square"></i> */}
    //         </li>

    //     </ul>

    // </div>

);

export default Sidenav;