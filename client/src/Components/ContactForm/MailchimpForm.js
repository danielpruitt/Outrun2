import React, { Component } from "react";
import { render } from "react-dom";
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Col from '../Grid/Col';

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () =>
        email &&
        name &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
            NAME: name.value
        });

    return (
        <div
            style={{
                // background: "#efefef",
                borderRadius: 2,
                // padding: 10,
                // display: "inline-block"
            }}
        >
        
            {/* <Container>  */}
                <Row> 
                    <Col size='s12'>
                        <div>
                            <label className='input-field din16' htmlFor='autocomplete-input'>Your Name</label>
                            <input
                                ref={node => (name = node)}
                                type="text"
                                // placeholder="Your name"
                                className="autocomplete"
                            />
                        </div>
                    </Col> 
                    <Col size='s12'>
                        <label className='input-field din16' htmlFor='autocomplete-input'>Your Email</label>

                        <input
                            ref={node => (email = node)}
                            type="email"
                            // placeholder="Your email"
                            className="autocomplete"
                        />
                    </Col>
                </Row>
                <Row> 
                    <Col size='s12'>
                        <button className='btn outrunPink' onClick={submit}>
                            Submit
                        </button>
                    </Col>
                </Row>
                {status === "sending" && <div className='din16' style={{ color: "blue" }}>sending...</div>}
            {status === "error" && (
                <div
                    className='din16'
                    style={{ color: "red" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className='din16'
                    style={{ color: '#bb1581' }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {/* </Container> */}

            
        </div>
    );
};

const url = 'https://outrunbrewingco.us3.list-manage.com/subscribe/post?u=2f57f101819640b330c446189&amp;id=c69ec2c0e60';
class Demo extends Component {
    render() {
        const url = 'https://outrunbrewingco.us3.list-manage.com/subscribe/post?u=2f57f101819640b330c446189&amp;id=c69ec2c0e6';

        return (
            <div>
                
                {/* <h5 className='din16 white-text'>FOLLOW THE NEON</h5> */}
                <MailchimpSubscribe
                    url={url}
                    render={({ subscribe, status, message }) => (
                        <CustomForm
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                        />
                    )}
                />
            </div>
        );
    }
}

// render(<Demo />, document.querySelector("#demo"));

export default Demo;