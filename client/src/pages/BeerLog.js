import React, {Component} from "react";
import Container from "../Components/Grid/Container";
import Col from "../Components/Grid/Col";
import Row from "../Components/Grid/Row";
import Form from "../Components/Form/Form";
import Textarea from "../Components/Form/Textarea"


class BeerLog extends Component {

    state = {
        name: " ",
        type: " ",
        ibu: " ",
        details: " ",
        abv: " ",
        image1: " ",
        image2: " "
    }


    render(){
        return(
            <div>
                <Container>
                    <h3>Log new beer here</h3>
{/* row for the basic inputs, this may change depending on what they want */}
                    <Row>
                        <Col size="s3">
                            <Form name="name" placeholder="Name"/>
                        </Col>
                        <Col size="s3">
                            <Form name="name" placeholder="Type"/>
                        </Col>
                        <Col size="s3">
                            <Form name="name" placeholder="IBU"/>
                        </Col>
                        <Col size="s3">
                            <Form name="name" placeholder="ABV"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="s12">
                            <Textarea placeholder="Details" />
                        </Col>
                    </Row>

                    {/* this is going to change once we figure out how we are going to upload the images.  */}
                    {/* the cheater way is to add pictures to imgur and call them from their url */}
                    {/* the better way is to actual store them in the database, but that probably will require paid storage, mLab free has a 5 gb cap */}
                    <Row>
                        <Col size="s6">
                            <Form name ="image1" placeholder="Image 1"/>
                        </Col>
                        <Col size="s6">
                            <Form name ="image2" placeholder="Image 2"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

};

export default BeerLog;