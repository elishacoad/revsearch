import React from 'react';
import { Alert, Button, ControlLabel, FormControl, FormGroup, Label } from 'react-bootstrap';

import dummyPapers from '../../../globals/dummyPapers';

const AddCorpusPresentational = props => (
    <div>
        <Alert className="text-center">
            <h4> Looks like you have not uploaded any papers yet! </h4>
            <br />
            <Button bsStyle="info" onClick={() => props.setCorpus(dummyPapers)}>
                Add Some Dummy Papers
            </Button>
            <br />
            OR
            <br />
            <Button bsStyle="info" onClick={props.addFromDatabase}>
                Add From Database
            </Button>
            <br />
            OR
            <br />
            <FormGroup>
                <ControlLabel htmlFor="fileUpload" style={{ cursor: 'pointer' }}>
                    <h4>
                        <Label bsStyle="info">
                            Add file
                        </Label>
                    </h4>
                    <FormControl
                        id="fileUpload"
                        type="file"
                        accept=".txt"
                        onChange={() => props.readFile()}
                        style={{ display: 'none' }}
                    />
                </ControlLabel>
            </FormGroup>
        </Alert>
    </div>);


export default AddCorpusPresentational;
