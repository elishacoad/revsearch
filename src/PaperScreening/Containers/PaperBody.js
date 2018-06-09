/** This is the body of the paper panel that contains the paper title,
 *  (in smaller text; not the title banner that you click on),
 *  and paper abstract, link, etc. The buttons are also displayed here.
 */

import '../../css/index.css';

import { Colors, Decision } from '../../Elements/constants'
import React, { Component } from 'react';
import { incrementRow, updatePaper } from '../../Actions';

import PaperBodyPresentational from '../Presentational/PaperBodyPresentational';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class PaperBody extends Component {
  constructor(props, context) {
    super(props, context);

    this.changePaperDecision = this.changePaperDecision.bind(this);
    this.state = { decisions: [] }
  }

  componentDidMount() {
    const decisions = this.buildDecisionObjects();
    this.setState({ decisions: decisions });
  }

  /**
   * zip: zip n arrays that are m length into an array of dimension n x m
   * ie: zip([[1, 2, 3], [4, 5, 6]]) -> [[1, 4], [2, 5], [3, 6]]
  */
  zip(arrays) {
    return arrays[0].map((_, i) => arrays.map(array => array[i]));
  }

  /** 
   *  make an array of decision objects to pass to DecisionButtonGroup
   *  where each object is {buttoncolor, clickvalue, displayvalue}
   *  - buttoncolor: the color of the button
   *  - decisionvalue: the value that the paper.decision will be updated to
   *  - displayvalue: the word to show in the button
  */
  buildDecisionObjects() {
    let decisionvalues = [Decision.INCLUDE, Decision.EXCLUDE, Decision.MAYBE];
    let colors = [Colors.INCLUDE, Colors.EXCLUDE, Colors.MAYBE];
    let displayvalues = ["Include", "Exlude", "Maybe"];
    return this.zip([colors, decisionvalues, displayvalues])
      .map(decision => {
        return { buttoncolor: decision[0], decisionvalue: decision[1], displayvalue: decision[2] }
      });
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
        decisions={this.state.decisions}
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