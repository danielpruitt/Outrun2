import React, {Component} from "react";
import Container from "../Components/Grid/Container";
import Col from "../Components/Grid/Col";
import Row from "../Components/Grid/Row";
import Form from "../Components/Form/Form";
import Textarea from "../Components/Form/Textarea";
import Button from "../Components/Button/Button"

import API from "../utils/API";


class BeerLog extends Component {

    state = {
        name: "",
        type: "",
        ibu: "",
        details: "",
        abv: "",
        image1: "",
        image2: "",
        allBeers: []
    }

    //componentDidMount will load the beers that are already there
    // there needs to be a delet function to delete the loaded beers
    // We should have a way to keep the beers in the database but not show on the website.
    // maybe a boolean that is true for showing and false for not 

    componentDidMount() {
        this.loadSaved();
        console.log(this.state.allBeers)
    };

    //--------------------------------------------------//
    // HANDLERS
    // handles the input change in a give field. 
    handleInputChange = event => {

        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        
    };


    // handle submission of the form
    handleSubmit = (event) => {
        event.preventDefault();

    };

    //--------------------------------------------------//

    // LOADER
    loadSaved = () => {
        API.getBeers()
        .then(res => this.setState({allBeers: res.data})
        .catch(err => console.log(err))
        );
    };

    render() {
        return (
            <div>
                <Container>
                    <h3>Log new beer here</h3>
                    {/* row for the basic inputs, this may change depending on what they want */}
                    <Row>
                        <Col size="s3">
                            <Form name="name" placeholder="Name" onChange={this.handleInputChange} />
                        </Col>
                        <Col size="s3">
                            <Form name="type" placeholder="Type" onChange={this.handleInputChange} />
                        </Col>
                        <Col size="s3">
                            <Form name="ibu" placeholder="IBU" onChange={this.handleInputChange} />
                        </Col>
                        <Col size="s3">
                            <Form name="abv" placeholder="ABV" onChange={this.handleInputChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="s12">
                            <Textarea name="details" placeholder="Details" onChange={this.handleInputChange} />
                        </Col>
                    </Row>

                    {/* this is going to change once we figure out how we are going to upload the images.  */}
                    {/* the cheater way is to add pictures to imgur and call them from their url */}
                    {/* the better way is to actual store them in the database, but that probably will require paid storage, mLab free has a 5 gb cap */}
                    <Row>
                        <Col size="s6">
                            <Form name="image1" placeholder="Image 1" />
                        </Col>
                        <Col size="s6">
                            <Form name="image2" placeholder="Image 2" />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="s2">
                            <Button onClick={this.handleSubmit} />
                        </Col>
                    </Row>
                </Container>

                <div>
                    <p> Name: {this.state.name}</p>
                    <p> Type: {this.state.type}</p>
                    <p> ibu: {this.state.ibu}</p>
                    <p> abv: {this.state.abv}</p>

                </div>
            </div>
        )
    }

};
export default BeerLog;