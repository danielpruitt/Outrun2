import React from "react";
import Col from "../Components/Grid/Col";
import Container from "../Components/Grid/Container";
import Row from "../Components/Grid/Row";
import Section from "../Components/Grid/Section";
import Parallax from "../Components/Parallax/Parallax";
import Footer from "../Components/Footer/Footer";
import RevealCard from "../Components/Card/Card";



const Landing = () => (
    <div>
    
        {/* Our Beers */}
        <Section>
            <Container>
                <Row>
                    {/* depending on how the image is stored the code will need to change to reflect it. */}
                    <Col size="s6">
                        <RevealCard
                            image={require("../images/beerCan.jpg")}
                            beerName="Vanilla Coke"
                            details="It's non-alcoholic. And not a product we made. But it's delicious"
                            abv="0.0"
                            type="Soda"
                            ibu="-.2"
                        />
                    </Col>
                    <Col size="s6">
                        <RevealCard
                            image={require("../images/beerCan.jpg")}
                            beerName="Vanilla Coke"
                            details="It's non-alcoholic. And not a product we made. But it's delicious"
                            abv="0.0"
                            type="Soda"
                            ibu="-.2"
                        />
                    </Col>
                    <Col size="s6">
                        <RevealCard
                            image={require("../images/beerCan.jpg")}
                            beerName="Vanilla Coke"
                            details="It's non-alcoholic. And not a product we made. But it's delicious"
                            abv="0.0"
                            type="Soda"
                            ibu="-.2"
                        />
                    </Col>
                    <Col size="s6">
                        <RevealCard
                            image={require("../images/beerCan.jpg")}
                            beerName="Vanilla Coke"
                            details="It's non-alcoholic. And not a product we made. But it's delicious"
                            abv="0.0"
                            type="Soda"
                            ibu="-.2"
                        />
                    </Col>
                </Row>
            </Container>
        </Section>

        <Parallax
            image={require("../images/brickwall.jpg")}
        />

        {/* Our Story */}
        <Section>
            <Container>
                <Row>
                    <Col size="s12">
                        <div>
                            <p>

                                Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.
                                
                                Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.
                                
                                Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.
                                
                                Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.
                                
                                My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Section>

        <Parallax
            image={require("../images/brickwall.jpg")}
        />

        {/* Location: need address and maybe add in google maps */}
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

        <Parallax
            image={require("../images/brickwall.jpg")}
        />

        {/* Contact */}
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

        <Parallax
            image={require("../images/brickwall.jpg")}
        />

        {/* footer, nothing below this */}
        <Footer />

    </div>

);

export default Landing;