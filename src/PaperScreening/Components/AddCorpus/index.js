import { Alert, Button } from 'react-bootstrap';
import React, { Component } from 'react';

import { addCorpusAction } from '../../../Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { parseCorpus } from './CorpusParser'
import uuid from 'uuid';

class AddCorpus extends Component {
  handleSubmit(e) {
    e.preventDefault();
    let papers = parseCorpus();
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

  render() {
    return (
      <div>
        <Alert bsStyle="warning" style={{ textAlign: "center" }}>
          <h4> Looks like you haven't uploaded any papers yet! </h4>
          <br />
          <Button bsStyle="warning" onClick={this.handleSubmit.bind(this)}>
            Add Some Papers
          </Button>
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
