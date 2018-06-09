import { Alert, Button, ControlLabel, FormControl, FormGroup, Label } from 'react-bootstrap';
import React, { Component } from 'react';

import { addCorpusAction } from '../../Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { parseCorpus } from '../../Elements/corpusParser'
import uuid from 'uuid';

class AddCorpus extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(inputtext = null) {
    let papers = parseCorpus(inputtext);
    if (papers.length === 0) {
      alert("No papers able to parsed.");
    }
    else {
      papers = papers.map((paper, i) => {
        paper.id = uuid.v4() + "_" + i;
        return paper;
      });
      this.props.addCorpusAction(papers);
    }
  }

  readFile(e) {
    e.preventDefault()
    let file = e.target.files[0];
    let read = new FileReader();
    read.readAsBinaryString(file);
    read.onloadend = () => {
      this.handleSubmit(read.result);
    }
  }

  render() {
    return (
      <div>
        <Alert style={{ textAlign: "center" }}>
          <h4> Looks like you haven't uploaded any papers yet! </h4>
          <br />
          <Button bsStyle="info" onClick={this.handleSubmit.bind(this)}>
            Add Some Dummy Papers
          </Button>
          <br />
          OR
          <br />
          <FormGroup>
            <ControlLabel htmlFor="fileUpload" style={{ cursor: "pointer" }}>
              <h4>
                <Label bsStyle="info">
                  Add file
                </Label>
              </h4>
              <FormControl
                id="fileUpload"
                type="file"
                accept=".txt"
                onChange={this.readFile.bind(this)}
                style={{ display: "none" }}
              />
            </ControlLabel>
          </FormGroup>
        </Alert>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    papers: state.papers
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addCorpusAction: addCorpusAction }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AddCorpus);
