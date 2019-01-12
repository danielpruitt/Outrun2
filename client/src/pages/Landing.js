import React from "react";
import Col from "../Components/Grid/Col";
import Container from "../Components/Grid/Container";
import Row from "../Components/Grid/Row";
import Section from "../Components/Grid/Section";
import Parallax from "../Components/Parallax/Parallax";



const Landing = () => (
    <div>
    
        <Parallax
            image={require("../images/beer1.jpg")}
        />
        <Section>
            <Container>
                <Row>
                    <Col size="s12">
                        <div>
                            <p>
                                My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Section>

    </div>

);

export default Landing;