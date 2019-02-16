import React from "react";
import Col from "../Components/Grid/Col";
import Container from "../Components/Grid/Container";
import Row from "../Components/Grid/Row";
import {Link} from "react-router-dom";
import Section from "../Components/Grid/Section"
import Parallax from "../Components/Parallax/Parallax"

const OurBrewers = () => (
    <div>
        <Section>
            <Container>
            <Row>
                <Col size="s12">
                    Ryan Silva
                    <Link to={"/"}><h5>back.</h5></Link>
                </Col>
            </Row>
        </Container>
        </Section>
        <Parallax 
        image={require("../images/OutRunSunset.jpg")}
        />
        
    </div>
);

export default OurBrewers;


