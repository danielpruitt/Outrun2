import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
// import {baseUrl} from "../../images/carouselImages";


export default class LazyLoad extends Component {
    render() {
        const setting = {
            className: "slider variable-width",
            dots: false,
            lazyload: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            // variableWidth:true,
            swipeToSlide: true,
            adaptiveHeight: true
        };

        return (
            <div>
                <div>
                    <h4 className="lazer84">Our Brewers</h4>
                    <Link to={"/"} className="right-align" ><p>back</p></Link>
                </div>


                <Slider {...setting}>
                    <div>
                        <img className="responsive-img center" src={require("../../images/carouselImages/photo1.jpg")} alt="photo1" />
                    </div>
                    <div>
                        <img src={require("../../images/carouselImages/photo2.jpg")} alt="photo2" />
                    </div>
                    <div>
                        <img src={require("../../images/carouselImages/photo3.jpg")} alt="photo3" />
                    </div>
                    <div>
                        <img src={require("../../images/carouselImages/photo4.jpg")} alt="photo4" />
                    </div>
                    <div>
                        <img src={require("../../images/carouselImages/photo5.jpg")} alt="photo5" />
                    </div>
                    <div>
                        <img src={require("../../images/carouselImages/photo6.jpg")} alt="photo6" />
                    </div>
                </Slider>

            


            </div>
        )
    }
}