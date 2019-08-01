import React, { Component } from "react";
import Form from "../Form/Form";
import Container from "../Grid/Container";
import Row from "../Grid/Row";
import Col from "../Grid/Col";
import SendButton from "../Button/SendButton";
import Demo from './MailchimpForm';
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
                        <form  action='https://formspree.io/ryanoutrunbrewing@gmail.com' method='POST'>
                            <Col size="s12">
                                <div>                 
                                    <label className=' input-field din16' htmlFor="autocomplete-input">Name</label>

                                    <input type="text" name="name" />
                                    {/* <Form name="contacter" placeholder="Name" onChange={this.handleInputChange} /> */}
                                </div>
                            </Col>
                            <Col size="s12">
                                <div>
                                    <label className=' input-field din16' htmlFor="autocomplete-input">Subject</label>

                                    <input type="text" name="subject" className="autocomplete" />
                                    {/* <Form name="email" placeholder="Email" onChange={this.handleInputChange} /> */}
                                </div>
                            </Col>
                            <Col size="s12">
                                <div>      
                                    <label className=' input-field din16' htmlFor="autocomplete-input">Body</label>

                                    <input type="text" name="body" />
                                    {/* <Form name="email" placeholder="Email" onChange={this.handleInputChange} /> */}
                                </div>
                            </Col>
                            <Col size="s12">
                                <div>
                                <label className=' input-field din16' htmlFor="autocomplete-input">Email</label>

                                <input type="email" name="_replyto" />
                                    {/* <Form name="question" placeholder="" onChange={this.handleInputChange} /> */}
                                </div>
                            </Col>
                            <Row>
                                <Col >
                                    <button type='submit' value='send' className='btn formspree-send outrunPink'>Send</button>
                                </Col>       
                            </Row>
                        </form>

                    </Row>
                    <Row>
                        <Col size='s12'>
                            <div className=' center-align'>
                                <h4 className="din16 modal-trigger clickable" href="#modal1">Subscribe</h4>
                            </div>
                        
                            <div id="modal1" className="modal">
                                <div>

                                    <a href="#!" className="modal-close-x modal-close waves-effect waves-green btn-flat din16">X</a>

                                </div>
                                <div className="modal-content din16">
                                    <h4>Follow The Neon</h4>
                                    <Demo />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

};

export default ContactForm;