import React from "react";
import Container from "../Components/Grid/Container";
import Section from "../Components/Grid/Section"
import Brewers from '../Components/BrewerGrid/Brewers'
// import LazyLoad from "../Components/Carousel/Carousel";

const OurBrewers = () => (
    <div>
        <Section>
            <Container>
                <Brewers />

            </Container>
        </Section>


    </div>
);

export default OurBrewers;


