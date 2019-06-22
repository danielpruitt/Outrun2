import React, { Component } from "react";
import Col from "../Components/Grid/Col";
import Container from "../Components/Grid/Container";
import Row from "../Components/Grid/Row";
import Section from "../Components/Grid/Section";
import Parallax from "../Components/Parallax/Parallax";
import Footer from "../Components/Footer/Footer1";
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

                {/* <Header /> */}
                {/* Our Beers */}
                <Navbar />
        
                <div id='ourbeers'></div>
                <br />


                <Section>
                    
                    {/* <Container>
                        <Row>
                            <Col size="s12">
                                <h3 className="lazer84 border-bottom scrollspy ourbeers" id="">Beers</h3>
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
                    </Container> */}

                    <Container>
                        <Row> 
                            <Col size='s12'>
                                <h3 className='lazer84 border-bottom'>Beers</h3>
                            </Col>
                        </Row>
                        <Row> 
                            <Col size='s5'>
                                <img className='responsive-img' src={require("../images/FollowTheNeon_Sign_Outrun.jpg")} alt='Follow The Neon' />
                            </Col>
                            <Col size='s7'>
                                <h5 className='abyssopelagic'>We are a brewer owned and operated small-scale production brewery that focuses on approachable and highly drinkable small-batch brews. We put our own spin on a variety of styles, old and new. Our beer is brewed in house and only available in our taproom. We take our beer seriously, but not ourselves, and are dedicated to brewing rarities, untasted originals, and re-imagined favorites.
                                    </h5>
                                    <a className=' btn outrunPink'
                                    onClick={() => window.open('https://www.patreon.com/outrunbrewingco','_blank')}
                                    >Become a Patron</a>
                            </Col>
                        </Row>
                    </Container>
                </Section>

                <Parallax
                    image={require("../images/bottling.jpg")}
                />

                {/* Our Story */}
                <div id='ourstory'> </div>
                <br/>
                <Section>
                    <Container>
                        <Row>
                            <Col size="s12">
                                <h3 className="lazer84 border-bottom scrollspy ourstory" id="">Our Story</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="s4">
                                <img className='responsive-img' src={require('../images/Gazelle Logo_Pink.png')} alt='Our Story pic' />
                            </Col>
                            <Col size="s8">
                                <div>
                                    <h5 className="abyssopelagic ">We are a brewer owned and operated small-scale production brewery that focuses on approachable and highly drinkable small-batch brews. We put our own spin on a variety of styles, old and new. Our beer is brewed in house and only available in our taproom. We take our beer seriously, but not ourselves, and are dedicated to brewing rarities, untasted originals, and re-imagined favorites.
                                    </h5>
                                    <h4 className='abyssopelagic '>Remember to #followtheneon</h4>

                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="s8">
                            </Col>
                            <Col size="s4">
                                {/* <Link className='abyssopelagic' to={"/ourbrewers"}><h5>Meet our brewers.</h5></Link> */}
                            </Col>
                        </Row>
                    </Container>
                </Section>

                <Parallax
                    image={require("../images/brewRoom.jpg")}
                />

                {/* Contact */}
                <div id='contact'></div>
                <br/>

                <Section>
                    <Container>
                        <Row>
                            <Col size="s12">
                                <h3 className="lazer84 border-bottom contact" id="">Contact</h3>
                            </Col>
                        </Row>
                    </Container>
                    <ContactForm />
                </Section>


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