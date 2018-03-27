import './index.css';

import { Button, Label } from 'react-bootstrap';
import { Colors, Decision } from '../../../Constants';
import React, { Component } from 'react';

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
    const buttons = (
      <div>
        <Button href="" style={{ backgroundColor: Colors.INCLUDE }} className="decisionbutton" onClick={this.changeColor.bind(this, Decision.INCLUDE)}>
          Include
              </Button>
        <Button href="" style={{ backgroundColor: Colors.EXCLUDE }} className="decisionbutton" onClick={this.changeColor.bind(this, Decision.EXCLUDE)}>
          Exclude
              </Button>
        <Button href="" style={{ backgroundColor: Colors.MAYBE }} className="decisionbutton" onClick={this.changeColor.bind(this, Decision.MAYBE)}>
          Maybe
              </Button>
      </div>
    );
    return (
      <tr onClick={this.rowClicked.bind(this)}>
        <td className="grow">
          <h4>{this.props.paper.title}</h4>
          {this.state.isExpanded && this.props.paper.abstract}
        </td>
        <td className="decisionbutton" style={{ "backgroundColor": Colors[this.props.paper.decision.toUpperCase()] }}>
          {this.state.isExpanded ?
            buttons :
            <h4><Label>{this.props.paper.decision}</Label></h4>
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
