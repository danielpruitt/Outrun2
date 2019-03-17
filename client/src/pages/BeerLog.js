import React, { Component } from "react";
import Container from "../Components/Grid/Container";
import Col from "../Components/Grid/Col";
import Row from "../Components/Grid/Row";
import Form from "../Components/Form/Form";
// import Textarea from "../Components/Form/Textarea";
import Button from "../Components/Button/Button";
import API from "../utils/API";
import RevealCard from "../Components/Card/Card";
import DelButton from "../Components/Button/DelButton";
import EditButton from "../Components/Button/EditButton";


class BeerLog extends Component {

    state = {
        beerName: "",
        type: "",
        ibu: "",
        details: "",
        abv: "",
        image: "",
        key:"",
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
                key:""
            })
        
        )
        .catch(err => console.log(err))

        
    };
    //--------------------------------------------------//
    // HANDLERS
    // handles the input change in a give field. 
    handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        
    };
    
    deleteBeer = id => {
        API.deleteBeer(id)
        .then(res => this.loadSaved())
        .catch(err => console.log(err));
    };

    handleEdit = id => {
        console.log("clicked edit on id: "+ id);
        //this will need to trigger something for the new input fields to show and then call the handleSubmit
    }

    // handle submission of the form
    handleSubmit = (event) => {
        event.preventDefault();
        // console.table(this.state);
        if(this.state.beerName && this.state.type && this.state.abv) {
            API.saveBeer({
                name: this.state.beerName,
                type: this.state.type,
                ibu: this.state.ibu,
                details: this.state.details,
                abv: this.state.abv,
                image: this.state.image,
                
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
            key:""
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
                            <Form name="abv" placeholder="ABV (no %)" onChange={this.handleInputChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="s12">
                            <Form name="details" placeholder="Details" onChange={this.handleInputChange} />
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
        
                <Row>
                    <Col size="s6">
                        <img src={`${this.state.image}`} alt="Checking to see if it's the right img" className="responsive-img" /> 
                    </Col>
                </Row>

                <div> 
                    {/* set cards here with the existing beers  */}
                    <Container>
                        <Row>
                            {this.state.allBeers.map(beer => (
                                <div key={beer._id}>
                                    <Col size="s6">
                                    <RevealCard
                                    image={beer.image}
                                    beerName={beer.name}
                                    details={beer.details}
                                    abv={beer.abv}
                                    type={beer.type}
                                    ibu={beer.ibu}
                                    id={beer._id}
                                    />
                        
                                    <Row>
                                    <Col size="s2">
                                        <EditButton onClick={() => this.handleEdit(beer._id)} />
                                    </Col>

                                    <Col size="s2">
                                        <DelButton onClick={() => this.deleteBeer(beer._id)} />
                                    </Col>
                                </Row>
                                </Col>
                                </div>
                            ))}
                        </Row>
                    </Container>

                
                
                </div>
            </div>
        )
    }

};
export default BeerLog;