import React, { Component } from "react";
import Form from "../Form/Form";
import Container from "../Grid/Container";
import Row from "../Grid/Row";
import Col from "../Grid/Col";
import SendButton from "../Button/SendButton";
import Axios from "axios";

class ContactForm extends Component {

    state = { 
        contacter: "",
        email: "",
        question: ""
    }

// handler
handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
    
};

//submit
handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email: " + this.state.email);
    console.log("contacter: " + this.state.contacter);
    console.log("question: " + this.state.question);

    Axios({
        method: "POST",
        url:"http://localhost:3002/send",
        data: { 
            name: this.state.contacter,
            email: this.state.email,
            question:this.state.question
        }
    }).then((response) => {

        if(response.data.msg === "success"){ 
            this.setState({
                contacter: "",
                email: "",
                question:""
            });
            
        } else if (response.data.msg ==="fail") { 
            console.log("error");
        }
    })
}


    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="s12">
                            <div>
                                <Form name="contacter" placeholder="Name" onChange={this.handleInputChange} />
                            </div>
                        </Col>
                        <Col size="s12">
                            <div>
                                <Form name="email" placeholder="Email" onChange={this.handleInputChange} />
                            </div>
                        </Col>
                        <Col size="s12">
                            <div>
                                <Form name="question" placeholder="" onChange={this.handleInputChange} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <SendButton onClick={this.handleSubmit} /> 
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

};

export default ContactForm;