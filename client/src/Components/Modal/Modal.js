import React from "react";
import Modal from "react-animated-modal";

export default class App extends React.Component {
    state = {
        showModal: false
    };
    render() {
        return (
            <div>
                <Modal
                    visible={this.state.showModal}
                    closemodal={() => this.setState({ showModal: false })}
                    type="flipInX"
                >
                    Some text or JSX inside modal goes here...
                </Modal>
                <div onClick={() => this.setState({ showModal: true })}>
                    Open Modal
                </div>
            </div>
        );
    }
}