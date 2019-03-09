// import all of the components needed
import React from 'react';
import Col from '../Grid/Col';
import Row from '../Grid/Row';
import HeaderContainer from './headerContainer';
import Parallax from '../Parallax/Parallax';


const Header = () => (
    // <header className='header responsive-img'>
    <header className="">
        {/* this is a container built exactly like a regular container just with another class hard coded inside */}

        {/* <img className="responsive-img" src={require("../../images/headerlogo.png")} alt="HeaderLogo"/> */}
        {/* <Parallax image="https://lh3.googleusercontent.com/yvYRX28GPpKlZo8uc40aMlQrbVx1vWpPSf9uHBPgvOtEU0oQtfmucQvJvZGtPp_V8nBfttBXbl_LSx67lSr54LY27v_nbFL1oHLdl16vXrjfYuXxUFIuLaOy1QHUtEBRaVg4krYRryuVkN2CvM4yT2f4w2YPxA7klDE-NlyhIWh107zopYq3QNKCgtn3bC5lapZ2XWxn2sZ6Pa7xcWF9ut6TZyxrT0l-D8HbvXxElECjpNaUd0T1pmuvigru5CC-oZB0blADfGKWyrn72bq8Oe_3fRd0j4PbFxG-34lpNZkpw3rDbuiMkqwMSmbD57A6k0hog9nX_VK5BoNV4KdzTE5GonK5PffQ3RxEL99x1ogXn1kLSpXqmlFXQ8ybpFTxSDsHROB3JLlMS-xxmauTLCt3Int0NxIAE8VWiEM2Ine4BksKhSrORNGgmUyPTCa5XZmNiUDjU-H2ArxV9LyaUVIVT7GPnU4twhvPSFzm9g-WTlXLLN8pU1aAojAAO9ulmqEEkUFfUoGs0Mp6ahpPlFS5maHtSnvvvXsdYzpIF03WI01pxiA17lvJLLov0RqHtMFdaVTXJjwhsrdjLntYvQPBdOoW9habW1owa8du51Tu3fa4rma_obE9nErVET11OxmHmcYNcaetwrq3vJ6iDEO7r9hE6WQ=w1270-h914-no"/> */}
        {/* <img className="respImg" src="https://lh3.googleusercontent.com/yvYRX28GPpKlZo8uc40aMlQrbVx1vWpPSf9uHBPgvOtEU0oQtfmucQvJvZGtPp_V8nBfttBXbl_LSx67lSr54LY27v_nbFL1oHLdl16vXrjfYuXxUFIuLaOy1QHUtEBRaVg4krYRryuVkN2CvM4yT2f4w2YPxA7klDE-NlyhIWh107zopYq3QNKCgtn3bC5lapZ2XWxn2sZ6Pa7xcWF9ut6TZyxrT0l-D8HbvXxElECjpNaUd0T1pmuvigru5CC-oZB0blADfGKWyrn72bq8Oe_3fRd0j4PbFxG-34lpNZkpw3rDbuiMkqwMSmbD57A6k0hog9nX_VK5BoNV4KdzTE5GonK5PffQ3RxEL99x1ogXn1kLSpXqmlFXQ8ybpFTxSDsHROB3JLlMS-xxmauTLCt3Int0NxIAE8VWiEM2Ine4BksKhSrORNGgmUyPTCa5XZmNiUDjU-H2ArxV9LyaUVIVT7GPnU4twhvPSFzm9g-WTlXLLN8pU1aAojAAO9ulmqEEkUFfUoGs0Mp6ahpPlFS5maHtSnvvvXsdYzpIF03WI01pxiA17lvJLLov0RqHtMFdaVTXJjwhsrdjLntYvQPBdOoW9habW1owa8du51Tu3fa4rma_obE9nErVET11OxmHmcYNcaetwrq3vJ6iDEO7r9hE6WQ=w1270-h914-no"/> */}

        <HeaderContainer>
            {/* <img src={require("../../images/headerlogo.png")} alt="HeaderLogo"/> */}
            <img className="respImg" src="https://lh3.googleusercontent.com/yvYRX28GPpKlZo8uc40aMlQrbVx1vWpPSf9uHBPgvOtEU0oQtfmucQvJvZGtPp_V8nBfttBXbl_LSx67lSr54LY27v_nbFL1oHLdl16vXrjfYuXxUFIuLaOy1QHUtEBRaVg4krYRryuVkN2CvM4yT2f4w2YPxA7klDE-NlyhIWh107zopYq3QNKCgtn3bC5lapZ2XWxn2sZ6Pa7xcWF9ut6TZyxrT0l-D8HbvXxElECjpNaUd0T1pmuvigru5CC-oZB0blADfGKWyrn72bq8Oe_3fRd0j4PbFxG-34lpNZkpw3rDbuiMkqwMSmbD57A6k0hog9nX_VK5BoNV4KdzTE5GonK5PffQ3RxEL99x1ogXn1kLSpXqmlFXQ8ybpFTxSDsHROB3JLlMS-xxmauTLCt3Int0NxIAE8VWiEM2Ine4BksKhSrORNGgmUyPTCa5XZmNiUDjU-H2ArxV9LyaUVIVT7GPnU4twhvPSFzm9g-WTlXLLN8pU1aAojAAO9ulmqEEkUFfUoGs0Mp6ahpPlFS5maHtSnvvvXsdYzpIF03WI01pxiA17lvJLLov0RqHtMFdaVTXJjwhsrdjLntYvQPBdOoW9habW1owa8du51Tu3fa4rma_obE9nErVET11OxmHmcYNcaetwrq3vJ6iDEO7r9hE6WQ=w1270-h914-no" alt="HeaderLogo"/>

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