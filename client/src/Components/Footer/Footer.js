import React from "react";
import Row from "../Grid/Row"
import Col from "../Grid/Col";


const Footer = () => (
    <div className="section gradient">
        <Row>

            {/* insta, facebook, twitter */}
            <Col size="s4">

                <h1 className="center-align">
                    <i className="fab fa-instagram"></i>
                    <h5>@OutrunBrewingCo</h5>
                </h1>
                <h1 className="center-align">
                    <i className="fab fa-facebook-square"></i>
                    <h5>facebook.com/OutrunBrewingCo</h5>
                </h1>
                <h1 className="center-align">
                    <i className="fab fa-twitter-square"></i>
                    <h5>@OutrunBrewingCo</h5>
                </h1>
            </Col>

            {/* DeerLogo, may need a color change, actually it probably will */}
            <Col size="s4">
                <img className="center responsive-img" src={require("../../images/Outrun_Gazelle.JPG")} alt="Outrun Gazelle" />
            </Col>

            <Col size="s1" />
            {/* location and phone and stuff */}
            <Col size="s3">
                <br/>
                <div className="left-align">
                    <h5>188 Our Road</h5>
                    <h5>Stone Mountain, Ga 3000something</h5>
                    <h5>770-867-5309</h5>
                </div>
                
            </Col>

        </Row>
    </div>

);

export default Footer;