/** This is the body of the paper panel that contains the paper title,
 *  (in smaller text; not the title banner that you click on),
 *  and paper abstract, link, etc. The buttons are also displayed here.
 */

import '../../css/index.css';

import React, { Component } from 'react';
import { incrementRow, updatePaper } from '../../Actions';

import PaperBodyPresentational from '../Presentational/PaperBodyPresentational';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class PaperBody extends Component {
  constructor(props, context) {
    super(props, context);
    this.changePaperDecision = this.changePaperDecision.bind(this);
  }


  changePaperDecision(decision) {
    let paper = this.props.paper;
    paper.decision = decision;
    this.props.updatePaper(paper);
    this.props.incrementRow();
  }

  render() {
    return (
      <PaperBodyPresentational
        keywords={this.props.keywords}
        paper={this.props.paper}
        handleDecisionButtonClick={this.changePaperDecision}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    keywords: state.keywords
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updatePaper: updatePaper,
      incrementRow: incrementRow
    },
    dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PaperBody);