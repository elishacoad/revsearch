import React from 'react';
import { Button, Modal, ControlLabel, FormGroup, FormControl, Radio, InputGroup } from 'react-bootstrap';
import CheckboxButton from '../../elements/CheckboxButton';


const DownloadPapersModalPresentional = props => (
    <Modal show={props.showModal} onHide={props.handleModalClose}>
        <Modal.Header closeButton>
            <Modal.Title>Download Papers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <ControlLabel>Download papers marked as</ControlLabel>

                <div className="container-grid">
                    <CheckboxButton
                        label="Included"
                        color="green"
                        count={props.decisionCounts.includes}
                        checked={props.decisionFilter.allowIncludes}
                        handleChange={checked => props.setDecisionFilter({
                            ...props.decisionFilter, allowIncludes: checked,
                        })}
                        lg
                    />

                    <CheckboxButton
                        label="Excluded"
                        color="red"
                        count={props.decisionCounts.excludes}
                        checked={props.decisionFilter.allowExcludes}
                        handleChange={checked => props.setDecisionFilter({
                            ...props.decisionFilter, allowExcludes: checked,
                        })}
                        lg
                    />

                    <CheckboxButton
                        label="Maybe"
                        count={props.decisionCounts.maybes}
                        checked={props.decisionFilter.allowMaybes}
                        handleChange={checked => props.setDecisionFilter({
                            ...props.decisionFilter, allowMaybes: checked,
                        })}
                        lg
                    />
                    <CheckboxButton
                        label="Undecided"
                        color="gray"
                        count={props.decisionCounts.undecided}
                        checked={props.decisionFilter.allowUndecided}
                        handleChange={checked => props.setDecisionFilter({
                            ...props.decisionFilter, allowUndecided: checked,
                        })}
                        lg
                    />
                </div>

                <ControlLabel>Document Format</ControlLabel>
                <FormGroup controlId="documentFormatSelect">
                    <Radio name="documentFormatSelectGroup" defaultChecked>
                        Endnote
                    </Radio>
                </FormGroup>

                <ControlLabel>File Name</ControlLabel>
                <div className="container-grid">
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder={props.formFilenamePlaceholder}
                            value={props.filenameInput}
                            onChange={props.handleFilenameChange}
                            onKeyPress={props.handleFilenameKeypress}
                        />
                        <InputGroup.Addon>.txt</InputGroup.Addon>
                    </InputGroup>
                </div>

            </form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.handleModalClose}>Cancel</Button>
            <Button
                bsStyle="primary"
                onClick={props.handleDownloadButtonClick}
                disabled={!props.canDownload}
            >
                Download
            </Button>
        </Modal.Footer>
    </Modal>
);

export default DownloadPapersModalPresentional;
