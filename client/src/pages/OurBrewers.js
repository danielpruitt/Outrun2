import React from "react";
import Col from "../Components/Grid/Col";
import Container from "../Components/Grid/Container";
import Row from "../Components/Grid/Row";
import {Link} from "react-router-dom";

const OurBrewers = () => (
    <div>
        <Container>
            <Row>
                <Col size="s12">
                    Ryan Silva
                    <Link to={"/"}><h5>back.</h5></Link>
                </Col>
            </Row>
        </Container>
    </div>
);

export default OurBrewers;


