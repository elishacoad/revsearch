import React, { Component } from 'react';

import AddCorpusPresentational from '../Presentational/AddCorpusPresentational';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { parseCorpus } from '../../Elements/corpusParser'
import { setCorpus } from '../../Actions';

class AddCorpus extends Component {
  constructor(props, context) {
    super(props, context);

    this.setCorpusToString = this.setCorpusToString.bind(this);
    this.readFile = this.readFile.bind(this);
  }

  /**
   * Set the collection of papers by reading in a string, parsing it
   * and setting the global state corpus to the result.
   */
  setCorpusToString(inputtext) {
    let corpus = parseCorpus(inputtext);
    // set a unique key for each paper using it's index in the corpus
    corpus = corpus.map((paper, i) => Object.assign(paper, {id: i}));
    this.props.setCorpus(corpus);
  }

  readFile(e) {
    e.preventDefault()
    let file = e.target.files[0];
    let read = new FileReader();
    read.readAsBinaryString(file);
    read.onloadend = () => {
      this.setCorpusToString(read.result);
    }
  }

  render() {
    return (
      <AddCorpusPresentational
        setCorpus={this.setCorpusToString}
        readFile={this.readFile}
      />
    );
  }
}

const mapStateToProps = null;

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ setCorpus: setCorpus }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AddCorpus);
