import './index.css';

import React, { Component } from 'react';

import { Button } from 'react-bootstrap';
import Decision from '../../../Constants';
import { bindActionCreators } from 'redux';
import { changeDecision } from '../../../Actions';
import { connect } from 'react-redux';

class PaperItem extends Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false
    }
  }

  changeColor(decision) {
    this.props.paper.decision = decision;
    this.props.changeDecision(this.props.paper);
  }

  rowClicked() {
    let isExpanded = this.state.isExpanded;
    this.setState({ isExpanded: !isExpanded });
  }

  render() {
    const colors = {
      "include": "#77dd77",
      "maybe": "#89CDC2",
      "exclude": "#FF8585"
    };
    const buttons = (
      <div>
        <Button href="" bsStyle="success" className="decisionbutton" onClick={this.changeColor.bind(this, Decision.INCLUDE)}>
          Include
              </Button>
        <Button href="" bsStyle="danger" className="decisionbutton" onClick={this.changeColor.bind(this, Decision.EXCLUDE)}>
          Exclude
              </Button>
        <Button href="" bsStyle="info" className="decisionbutton" onClick={this.changeColor.bind(this, Decision.MAYBE)}>
          Maybe
              </Button>
      </div>
    );
    return (
      <tr onClick={this.rowClicked.bind(this)} style={{ "backgroundColor": colors[this.props.paper.decision] }}>
        <td className="grow">
          <h5>{this.props.paper.title}</h5>
          {this.state.isExpanded && this.props.paper.abstract}
        </td>
        <td className="decisionbutton">
          {this.state.isExpanded ?
            buttons :
            <span>{this.props.paper.decision}</span>
          }
        </td>
      </tr>
    );
  }
}

function mapStateToProps(state) {
  return {
    papers: state.papers
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ changeDecision: changeDecision }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PaperItem);
