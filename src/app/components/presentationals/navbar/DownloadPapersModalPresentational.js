import React from 'react';
import { Button, Modal, ControlLabel, Checkbox, FormGroup, FormControl, Radio, InputGroup } from 'react-bootstrap';


const DownloadPapersModalPresentional = props => (
    <Modal show={props.showModal} onHide={props.handleModalClose}>
        <Modal.Header closeButton>
            <Modal.Title>Download Papers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <InputGroup>
                    <FormControl
                        type="text"
                        placeholder="download"
                        value={props.filenameInput}
                        onChange={props.handleFilenameChange}
                        onKeyPress={props.handleFilenameKeypress}
                    />
                    <InputGroup.Addon>.txt</InputGroup.Addon>
                </InputGroup>
                <Checkbox
                    defaultChecked
                    onChange={e => props.setDecisionFilter({
                        ...props.decisionFilter, allowIncludes: e.target.checked,
                    })}
                >
                    Includes ({props.decisionCounts.includes})
                </Checkbox>
                <Checkbox
                    defaultChecked
                    onChange={e => props.setDecisionFilter({
                        ...props.decisionFilter, allowExcludes: e.target.checked,
                    })}
                >
                    Excludes ({props.decisionCounts.excludes})
                </Checkbox>
                <Checkbox
                    defaultChecked
                    onChange={e => props.setDecisionFilter({
                        ...props.decisionFilter, allowMaybes: e.target.checked,
                    })}
                >
                    Maybes ({props.decisionCounts.maybes})
                </Checkbox>
                <Checkbox
                    defaultChecked
                    onChange={e => props.setDecisionFilter({
                        ...props.decisionFilter, allowUndecided: e.target.checked,
                    })}
                >
                    Undecided ({props.decisionCounts.undecided})
                </Checkbox>
                <FormGroup controlId="documentFormatSelect">
                    <ControlLabel>Document Format</ControlLabel>
                    <Radio name="documentFormatSelectGroup" defaultChecked>
                        Endnote
                    </Radio>
                </FormGroup>
            </form>
            <Button
                onClick={props.handleDownloadButtonClick}
                disabled={!props.canDownload}
            >
                Download
            </Button>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.handleModalClose}>Close</Button>
        </Modal.Footer>
    </Modal>
);

export default DownloadPapersModalPresentional;