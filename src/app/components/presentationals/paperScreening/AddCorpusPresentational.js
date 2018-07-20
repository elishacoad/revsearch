import React from 'react';
import { Alert, Button, ControlLabel, FormControl, FormGroup, Label } from 'react-bootstrap';

import dummyPapers from 'Globals/dummyPapers';

const AddCorpusPresentational = props => (
    <div>
        <Alert className="action-alert">
            <h4> Looks like you have not uploaded any papers yet! </h4>
            <br />
            <Button bsStyle="info" onClick={() => props.setCorpus(dummyPapers)}>
                Add Some Dummy Papers
            </Button>
            <br />
            OR
            <br />
            <FormGroup>
                <ControlLabel htmlFor="fileUpload" className="pointer-cursor">
                    <h4>
                        <Label bsStyle="info">
                            Add file
                        </Label>
                    </h4>
                    <FormControl
                        id="fileUpload"
                        type="file"
                        accept=".txt"
                        onChange={e => props.readFile(e)}
                        className="hidden"
                    />
                </ControlLabel>
            </FormGroup>
        </Alert>
    </div>);


export default AddCorpusPresentational;
