import React from "react";
import Col from "../Components/Grid/Col";
import Container from "../Components/Grid/Container";
import Row from "../Components/Grid/Row";
import { Link } from "react-router-dom";
import Section from "../Components/Grid/Section"

const OurBrewers = () => (
    <div>
        <Section>
            <Container>
                <Row>
                    <Col size="s4">   
                            <img src={require("../images/OutRunSunset.jpg")} alt="Ryan"  className="responsive-img "/>
                    </Col>
                    <Col size="s8">
                    <h1 className="lazer84">
                        Ryan Silva
                    </h1>
                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt aliquet magna vitae dapibus. Aenean porta ante a tellus iaculis porttitor. Sed laoreet vehicula dui quis aliquam. Nam mattis risus id malesuada egestas. Quisque imperdiet magna vitae euismod rutrum. Nunc non orci sed turpis vulputate sollicitudin. Aenean volutpat nunc vitae lectus venenatis finibus. Praesent condimentum lectus sit amet diam sagittis, in suscipit turpis sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras quis magna varius, luctus lorem vel, malesuada sem. Sed quis purus non sapien venenatis varius. Etiam nisl magna, dignissim id ex in, tincidunt sollicitudin velit. Curabitur quis ligula nulla. Quisque at magna volutpat, faucibus odio vel, auctor lectus.
                                    </p>    
                    </Col>
                </Row>
                <Row>
                    <Col size="s4">   
                            <img src={require("../images/OutRunSunset.jpg")} alt="Ryan"  className="responsive-img "/>
                    </Col>
                    <Col size="s8">
                    <h1 className="lazer84">
                        Ryan Silva
                    </h1>
                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt aliquet magna vitae dapibus. Aenean porta ante a tellus iaculis porttitor. Sed laoreet vehicula dui quis aliquam. Nam mattis risus id malesuada egestas. Quisque imperdiet magna vitae euismod rutrum. Nunc non orci sed turpis vulputate sollicitudin. Aenean volutpat nunc vitae lectus venenatis finibus. Praesent condimentum lectus sit amet diam sagittis, in suscipit turpis sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras quis magna varius, luctus lorem vel, malesuada sem. Sed quis purus non sapien venenatis varius. Etiam nisl magna, dignissim id ex in, tincidunt sollicitudin velit. Curabitur quis ligula nulla. Quisque at magna volutpat, faucibus odio vel, auctor lectus.
                                    </p>    
                    </Col>
                </Row>




                <Link to={"/"}><h5>back.</h5></Link>
            </Container>
        </Section>


    </div>
);

export default OurBrewers;


