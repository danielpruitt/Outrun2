import React from "react";
import Row from "../Grid/Row"
import Col from "../Grid/Col";
import MyParticles from "../Particles/Particles";


const Footer = () => (
    <div>
        <MyParticles />

        <div className="section gradient">
            <div className="front" >

                <Row>

                    {/* insta, facebook, twitter */}
                    <Col size="s4">
                        <div className="center-align white-text">
                            <h1>
                                <i className="fab fa-instagram"></i>
                            </h1>

                            <h5>@OutrunBrewingCo</h5>

                            <h1>
                                <i className="fab fa-facebook-square"></i>
                            </h1>

                            <h5>facebook.com/OutrunBrewingCo</h5>

                            <h1>
                                <i className="fab fa-twitter-square"></i>
                            </h1>

                            <h5>@OutrunBrewingCo</h5>
                        </div>
                    </Col>

                    {/* DeerLogo, may need a color change, actually it probably will */}
                    <Col size="s4">
                        <img className="center responsive-img " src={require("../../images/Gazelle Logo_Pink.png")} alt="Outrun Gazelle" />
                    </Col>

                    <Col size="s1" />
                    {/* location and phone and stuff */}
                    <Col size="s3">
                        <br />
                        <div className="left-align white-text">
                            <h5>188 Our Road</h5>
                            <h5>Stone Mountain, Ga 3000something</h5>
                            <h5>770-867-5309</h5>
                        </div>

                    </Col>

                </Row>

            </div>



        </div>
    </div>


);

export default Footer;