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

    // zip: zip n arrays that are m length into an array of dimension n x m
    const zip = rows => rows[0].map((_, c) => rows.map(row => row[c]));
    let displayDecisions = ["None", "Include", "Exlude", "Maybe"]
    // make an array of decision objects to pass to DecisionButtonGroup with the {buttoncolor, clickvalue, displayword}
    // buttoncolor is the color of the button
    // clickvalue is the value to be passed back to the changePaperDecision function
    // display word is the word to show in the button
    let decisions = zip(Object.keys(Colors), Object.keys(Decision), displayDecisions)
      .forEach(decision => {
        return { buttoncolor: decision[0], clickvalue: decision[1], displayword: decision[2] }
      });
    this.setState({decisions: decisions});
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