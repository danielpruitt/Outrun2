// import all of the components needed
import React from 'react';
import Col from '../Grid/Col';
import Row from '../Grid/Row';
import HeaderContainer from './headerContainer';


const Header = () => (
    <header className='header responsive-img'>
        {/* this is a container built exactly like a regular container just with another class hard coded inside */}

        {/* <img className="responsive-img" src={require("../../images/headerlogo.png")} alt="HeaderLogo"/> */}
    
        <HeaderContainer>
            
            <Row>
            <Col size='s3'>
                <p className='beersContent neon'>Beers</p>
            </Col>
            <Col size='s3'>
                <p className='ourStory neon right-align'>Our Story</p>
            </Col>
        </Row>
        </HeaderContainer>

        
    </header >

)

// export the component to be used on the landing page.
export default Header;