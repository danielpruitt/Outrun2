import React, { Component } from "react";
import Col from "../Components/Grid/Col";
import Container from "../Components/Grid/Container";
import Row from "../Components/Grid/Row";
import Section from "../Components/Grid/Section";
import Parallax from "../Components/Parallax/Parallax";
import Footer from "../Components/Footer/Footer";
import RevealCard from "../Components/Card/Card";
import API from "../utils/API";
import Header from "../Components/Header/header";
import { Link } from "react-router-dom";

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
                    <Container>
                        <Row>
                            <Col size="s12">
                                <h3 className="lazer84 border-bottom">Beers</h3>
                            </Col>
                        </Row>
                        <Row>
                            {this.state.allBeers.map(beer => (
                                <div key={beer._id}>
                                    <Col size="s6">
                                        {/* <ImageCard
                                            image={beer.image}
                                            beerName={beer.name}
                                            details={beer.details}
                                            abv={beer.abv}
                                            type={beer.type}
                                            ibu={beer.ibu}
                                            id={beer._id}
                                        /> */}

                                        
                                    <RevealCard
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
                    image={require("../images/OutRunSunset.jpg")}
                />

                {/* Our Story */}
                <Section>
                    <Container>
                        <Row>
                            <Col size="s12">
                                <h3 className="lazer84 border-bottom">Our Story</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="s12">
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt aliquet magna vitae dapibus. Aenean porta ante a tellus iaculis porttitor. Sed laoreet vehicula dui quis aliquam. Nam mattis risus id malesuada egestas. Quisque imperdiet magna vitae euismod rutrum. Nunc non orci sed turpis vulputate sollicitudin. Aenean volutpat nunc vitae lectus venenatis finibus. Praesent condimentum lectus sit amet diam sagittis, in suscipit turpis sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras quis magna varius, luctus lorem vel, malesuada sem. Sed quis purus non sapien venenatis varius. Etiam nisl magna, dignissim id ex in, tincidunt sollicitudin velit. Curabitur quis ligula nulla. Quisque at magna volutpat, faucibus odio vel, auctor lectus.
                                    </p>
                                    <p>
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vel tortor consequat, venenatis ipsum sit amet, suscipit ex. Mauris diam erat, hendrerit ac sagittis a, laoreet ut augue. Donec cursus tempor porttitor. Ut gravida massa augue, non ornare nisl efficitur vel. Sed placerat quam eu dolor dignissim placerat. Etiam id sapien vitae nibh dignissim auctor. Quisque condimentum elit at sollicitudin fermentum. Etiam bibendum, urna non eleifend rutrum, erat arcu ornare urna, nec faucibus elit leo vel dui. In eget massa at massa varius tincidunt vitae vel tortor. Ut at lacus nisl. Donec quis porta ex.
                                    </p>
                                    <p>
                                        Nam auctor quam arcu. Vivamus non elit tortor. In diam justo, viverra non massa eu, pretium feugiat dolor. Ut sapien dolor, dignissim eu facilisis vitae, mattis euismod nisi. Etiam ut ex cursus, sodales tellus eget, finibus nisi. Ut eget enim a arcu tincidunt auctor vitae ut lorem. Praesent elit diam, feugiat sed consectetur vel, gravida quis dui. Donec ornare lacus id velit venenatis, sed hendrerit velit pulvinar. Praesent eu euismod augue, eget varius neque. Fusce dignissim lectus id ex vestibulum vulputate. Phasellus facilisis blandit consequat. Phasellus consequat magna ut tristique ultricies.
                                    </p>
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
                    image={require("../images/OutRunSunset.jpg")}
                />

                {/* Location: need address and maybe add in google maps */}
                <Section>
                    <Container>
                        <Row>
                            <Col size="s12">
                                <h3 className="lazer84 border-bottom">Location</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="s12">
                                <div>
                                    <p>
                                        In volutpat, augue quis accumsan fringilla, elit metus fermentum justo, nec commodo metus risus sed nunc. Proin id congue nisi. Nulla tempus ipsum at pharetra dignissim. Proin dapibus, dolor ac venenatis pulvinar, est odio finibus mi, at tincidunt metus justo a felis. Praesent vulputate turpis id orci vehicula, id fringilla massa maximus. Mauris eleifend elit nulla, vel elementum arcu tincidunt non. Etiam sed feugiat odio. Quisque at facilisis mauris. Sed id velit efficitur, cursus eros iaculis, dapibus dui. Phasellus malesuada tellus at maximus pretium
                            </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Section>

                <Parallax
                    image={require("../images/OutRunSunset.jpg")}
                />

                {/* Contact */}
                <Section>
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
                </Section>

                <Parallax
                    image={require("../images/OutRunSunset.jpg")}
                />

                {/* footer, nothing below this */}

                <Footer />

            </div>
        )

    }
};



export default Landing;