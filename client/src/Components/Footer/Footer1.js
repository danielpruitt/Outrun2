import React from "react";
import Row from "../Grid/Row"
import Col from "../Grid/Col";
import MyParticles from "../Particles/Particles";


const Footer1 = () => (
    <div className="hide-on-med-and-down ">
        {/* <MyParticles /> */}

        <div className="section gradient">
            <div className="front" >

                <Row>

                    {/* insta, facebook, twitter */}
                    <Col size="s8">
                        <div className="center-align white-text">

                            <div className='clickable' onClick={() => window.open('https://www.instagram.com/outrunbrewingco/', '_blank')}>
                                
                                <p> <i className="fab fa-instagram"></i> @OutrunBrewingCo</p>

                            </div>
                            <div className='clickable' onClick={() => window.open('https://www.facebook.com/outrunbrewingco/', '_blank')}>
                                <p> <i className="fab fa-facebook-square"></i>facebook.com/OutrunBrewingCo</p>
                            </div>


                            {/* <p><i className="fab fa-twitter-square"></i>@OutrunBrewingCo</p> */}
                        </div>
                    </Col>

                    <Col size="s3">
                        <div className="clickable left-align white-text" 
                        onClick={() => window.open('https://goo.gl/maps/HqzUoCGs48AexUXA9', '_blank')}
                        >
                            <p>5368 East Mountain Street</p>
                            <p>Stone Mountain, Ga 30083</p>

                        </div>

                    </Col>

                </Row>

            </div>



        </div>
    </div>


);

export default Footer1;