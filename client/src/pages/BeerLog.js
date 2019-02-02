import React, { Component } from "react";
import Container from "../Components/Grid/Container";
import Col from "../Components/Grid/Col";
import Row from "../Components/Grid/Row";
import Form from "../Components/Form/Form";
import Textarea from "../Components/Form/Textarea";
import Button from "../Components/Button/Button";
import API from "../utils/API";
import RevealCard from "../Components/Card/Card";


class BeerLog extends Component {

    state = {
        beerName: "",
        type: "",
        ibu: "",
        details: "",
        abv: "",
        image: "",
        id:"",
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
                _id:""
            })
        )
        .catch(err => console.log(err))

        
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
        console.table(this.state);
        if(this.state.beerName && this.state.type && this.state.abv) {
            API.saveBeer({
                name: this.state.beerName,
                type: this.state.type,
                ibu: this.state.ibu,
                details: this.state.details,
                abv: this.state.abv,
                image: this.state.image
            })
            .then(res => this.loadSaved())
            .catch(err => console.log(err + "error in the form submit"));
        }
        this.setState({
            beerName: "",
            type: "",
            ibu: "",
            details: "",
            abv: "",
            image: "",
            _id:""
        })

    };

    //========================================================================================================================================//
    render() {
        return (
            <div>
                <Container>
                    <h3>Log new beer here</h3>
                    {/* row for the basic inputs, this may change depending on what they want */}
                    <Row>
                        <Col size="s3">
                            <Form name="beerName" placeholder="Name" onChange={this.handleInputChange} />
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
                            <Form name="image" placeholder="Image"  onChange={this.handleInputChange}/>
                        </Col>
                        {/* <Col size="s6">
                            <Form name="image2" placeholder="Image 2" />
                        </Col> */}
                    </Row>
                    <Row>
                        <Col size="s2">
                            <Button onClick={this.handleSubmit} />
                        </Col>
                    </Row>
                </Container>

                <div>
                    <p> Name: {this.state.beerName}</p>
                    <p> Type: {this.state.type}</p>
                    <p> ibu: {this.state.ibu}</p>
                    <p> abv: {this.state.abv}</p>
                    <p> Details: {this.state.details}</p>
                    <p>Image URL: {this.state.image}</p>

                </div>

                <div> 
                    {/* set cards here with the existing beers  */}
                    <Container>
                        <Row>
                            {this.state.allBeers.map(beer => (
                                <Col size="s6">
                                    <RevealCard
                                    image={beer.image}
                                    beerName={beer.name}
                                    details={beer.details}
                                    abv={beer.abv}
                                    type={beer.type}
                                    ibu={beer.ibu}
                                    key={beer._id}
                                    />
                                </Col>

                            ))}
                        </Row>
                    </Container>
                    {/* make sure there's a delete function */}
                </div>
            </div>
        )
    }

};
export default BeerLog;