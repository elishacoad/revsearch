import React, { Component } from 'react';

import { parseCorpus } from './CorpusParser'
import uuid from 'uuid';

class AddCorpus extends Component {

  handleSubmit(e) {
    let papers = parseCorpus(this.refs.fileContent.value);
    papers = papers.map((paper, i) => {
      paper.id = uuid.v4() + "_" + i;
      return paper;
    });
    this.props.addCorpus(papers);
    this.props.unmountMe();
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>Add Paper</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Upload a corpus of papers for screening.</label><br />
            <input type="file" id="openFile" />
            <br />
            <textarea ref="fileContent" id="fileContent" style={{ display: "none" }}></textarea>
          </div>
          <br />
          <input type="submit" value="Add Paper" />
          <br />
        </form>
      </div>
    );
  }
}

export default AddCorpus;
