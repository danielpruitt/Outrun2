// import all of the components needed
import React from 'react';
import Col from '../Grid/Col';
import Row from '../Grid/Row';
import HeaderContainer from './headerContainer';


const Header = () => (
    // <header className='header responsive-img'>
    <header className="hide-on-med-and-down">
            <img src={require("../../images/neonSign.jpg")} className="respImg" alt="HeaderLogo"/>

        {/* <HeaderContainer> */}
            <Row>
                <Col size='s3'>
                    <a className='beersContent neon' href="#ourbeers">Beers</a>
                </Col>
                <Col size='s3'>
                    <a className='ourStory neon right-align' href="#ourstory">Our Story</a>
                </Col>
            </Row>

        {/* </HeaderContainer> */}



    </header >

)

// export the component to be used on the landing page.
export default Header;