import React, { Component } from "react";
import Col from "../Components/Grid/Col";
import Container from "../Components/Grid/Container";
import Row from "../Components/Grid/Row";
import Section from "../Components/Grid/Section";
import Parallax from "../Components/Parallax/Parallax";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
// import RevealCard from "../Components/Card/Card";
import API from "../utils/API";
import Header from "../Components/Header/header";
import CustomCard from "../Components/Card/CustomCard";
import { Link } from "react-router-dom";
import ContactForm from "../Components/ContactForm/ContactForm";

// trying out this image card instead of a dynamic card
// import ImageCard from "../Components/Card/ImageCard";
class Landing extends Component {

    state = {
        beerName: "",
        type: "",
        ibu: "",
        details: "",
        abv: "",
        image: "",
        key: "",
        allBeers: []
    }

    componentDidMount() {

        this.loadSaved();

    };



    //--------------------------------------------------//
    // LOADER
    loadSaved = () => {
        API.getBeers()
            .then(res =>

                this.setState({
                    allBeers: res.data,
                    beerName: "",
                    type: "",
                    ibu: "",
                    details: "",
                    abv: "",
                    image: "",
                    key: ""
                })
            )
            .catch(err => console.log(err))


    };


    render() {
        return (
            <div>

                <Header />
                {/* Our Beers */}
                

                <Section>
                    <Navbar />
                    <Container>
                        <Row>
                            <Col size="s12">
                                <h3 className="lazer84 border-bottom scrollspy" id="ourbeers">Beers</h3>
                            </Col>
                        </Row>
                        <Row>
                            {this.state.allBeers.map(beer => (
                                <div key={beer._id}>
                                    <Col size="l4 m6 s12">

                                        <CustomCard
                                            image={beer.image}
                                            beerName={beer.name}
                                            details={beer.details}
                                            abv={beer.abv}
                                            type={beer.type}
                                            ibu={beer.ibu}
                                            id={beer._id}
                                        />

                                    </Col>
                                </div>

                            ))}
                        </Row>
                    </Container>
                </Section>

                <Parallax
                    image={require("../images/bottling.jpg")}
                />

                {/* Our Story */}
                <Section>
                    <Container>
                        <Row>
                            <Col size="s12">
                                <h3 className="lazer84 border-bottom scrollspy" id="ourstory">Our Story</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="s12">
                                <div>
                                    <p>We are a brewer owned and operated small-scale production brewery that focuses on approachable and highly drinkable small-batch brews. We put our own spin on a variety of styles, old and new. Our beer is brewed in house and only available in our taproom. We take our beer seriously, but not ourselves, and are dedicated to brewing rarities, untasted originals, and re-imagined favorites. Remember to #followtheneon</p>

                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="s8">
                            </Col>
                            <Col size="s4">
                                <Link to={"/ourbrewers"}><h5>Meet our brewers.</h5></Link>
                            </Col>
                        </Row>
                    </Container>
                </Section>

                <Parallax
                    image={require("../images/brewRoom.jpg")}
                />

                {/* Location: need address and maybe add in google maps */}
                <Section>
                    <Container>
                        <Row>
                            <Col size="s12">
                                <h3 className="lazer84 border-bottom" id="contact">Contact</h3>
                            </Col>
                        </Row>
                    
                    </Container>
                    <ContactForm />

                </Section>

                {/* <Parallax
                    image={require("../images/backroom.jpeg")}
                /> */}

                {/* Contact */}
                {/* <Section>
                    <Container>
                        <Row>
                            <Col size="s12">
                                <h3 className="lazer84 border-bottom">Contact</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="s12">
                                <div>
                                    <p>
                                        In volutpat, augue quis accumsan fringilla, elit metus fermentum justo, nec commodo metus risus sed nunc. Proin id congue nisi. Nulla tempus ipsum at pharetra dignissim. Proin dapibus, dolor ac venenatis pulvinar, est odio finibus mi, at tincidunt metus justo a felis. Praesent vulputate turpis id orci vehicula, id fringilla massa maximus. Mauris eleifend elit nulla, vel elementum arcu tincidunt non. Etiam sed feugiat odio. Quisque at facilisis mauris. Sed id velit efficitur, cursus eros iaculis, dapibus dui. Phasellus malesuada tellus at maximus pretium.

                                        Quisque condimentum nisi eu faucibus ornare. Curabitur elit sem, fringilla ac lacus in, dapibus vehicula lectus. Morbi vulputate maximus dolor eget semper. Etiam semper grfavida sagittis. Ut eget elit sed metus dictum dapibus. Quisque scelerisque nisl tristique, fringilla lacus fringilla, posuere sapien. Maecenas eget purus in dui porta efficitur. Nulla nec urna sapien.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Section> */}

                <Parallax
                    image={require("../images/brewRoom.jpg")}
                />

                {/* footer, nothing below this */}

                <Footer />

            </div>
        )

    }
};



export default Landing;