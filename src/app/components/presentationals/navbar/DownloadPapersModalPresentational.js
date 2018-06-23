import React from 'react';
import { Button, Modal, ControlLabel, Checkbox, FormGroup, FormControl } from 'react-bootstrap';


const DownloadPapersModalPresenational = props => (
    <Modal show={props.showModal} onHide={props.handleModalClose}>
        <Modal.Header closeButton>
            <Modal.Title>Download Papers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <FormControl
                    type="text"
                    value={props.filenameInput}
                    placeholder="Filename"
                    onChange={props.handleFilenameChange}
                />
                <FormGroup onClick={e => console.log(e)}>
                    <Checkbox onClick={e => console.log(e)}>1</Checkbox>
                    <Checkbox onChange={e => console.log(e)}>1</Checkbox>
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Document Format</ControlLabel>
                    <FormControl
                        componentClass="select"
                        placeholder="select"
                        onChange={e => console.log(e)}
                    >
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                    </FormControl>
                </FormGroup>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.handleModalClose}>Close</Button>
        </Modal.Footer>
    </Modal>
);

export default DownloadPapersModalPresenational;
