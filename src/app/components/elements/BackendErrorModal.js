import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class BackendErrorModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showErrorMessage: true,
        }
    }

    render() {
        return (
            <Modal
                show={this.props.backendContactError && this.state.showErrorMessage}
                onHide={() => this.setState({ showErrorMessage: false })}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Oh snap! You got an error!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        We can not seem to contact the backend :(
                        <br />
                        {this.props.children}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.setState({ showErrorMessage: false })}>
                        Dismiss
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default BackendErrorModal;