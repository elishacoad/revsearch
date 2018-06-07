import '../../../css/index.css';

import React, { Component } from 'react';
import { changeDecision, incrementRow } from '../../../Actions';

import PaperBodyPresentational from './PaperBodyPresentational';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class PaperBody extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleDecisionButtonClick = this.handleDecisionButtonClick.bind(this);
  }


  handleDecisionButtonClick(decision) {
    // this is causing an error that "a state is getting set inside the render"...
    // let paper = this.props.paper;
    // paper.decision = decision;
    // this.props.changeDecision(paper);
    this.props.incrementRow();
  }

  render() {
    return (
      <PaperBodyPresentational
        keywords={this.props.keywords}
        paper={this.props.paper}
        handleDecisionButtonClick={this.handleDecisionButtonClick}
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
      changeDecision: changeDecision,
      incrementRow: incrementRow
    },
    dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PaperBody);