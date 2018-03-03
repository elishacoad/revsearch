import { Alert, Button } from 'react-bootstrap';
import React, { Component } from 'react';

import { addCorpusAction } from '../../../Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { parseCorpus } from './CorpusParser'
import uuid from 'uuid';

class AddCorpus extends Component {
  // getFileText(evt) {
  //   var f = evt.target.files[0];
  //   if (f) {
  //     var r = new FileReader();
  //     r.onload = function (e) {
  //       var contents = e.target.result;
  //       console.log(contents.substr(1, contents.indexOf("n")));
  //       return contents;
  //     }
  //     r.readAsText(f);
  //   } else {
  //     alert("Failed to load file");
  //   }
  // }

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
      // this.props.papers = papers;
      this.props.unmountMe();
      this.props.addCorpusAction(papers);
    }
  }

  render() {
    return (
      <div>
        <Alert bsStyle="warning" style={{ "textAlign": "center" }}>
          <h4> Looks like you haven't uploaded any papers yet! </h4>
          <br />
          <Button bsStyle="warning" onClick={this.handleSubmit.bind(this)}>
            Add Some Papers
          </Button>
        </Alert>
        {/* <input type="file" id="fileinput" onChange={this.handleSubmit.bind(this)} /> */}
        {/* <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Upload a corpus of papers for screening.</label><br />
            <input type="file" id="openFile" />
            <br />
            <textarea ref="content" id="fileContent" style={{ display: "none" }}></textarea>
            <br />
            <input type="submit" value="Submit" />
          </div>
        </form> */}
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
