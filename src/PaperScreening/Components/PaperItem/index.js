import './index.css';

import React, { Component } from 'react';

import { Button } from 'react-bootstrap';
import Decision from '../../../Constants';
// import { bindActionCreators } from 'react-redux';
import { connect } from 'react-redux';

class PaperItem extends Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false
    }
  }

  changeColor(decision) {
    let colors = {
      "include": "#77dd77",
      "maybe": "#89CDC2",
      "exclude": "#FF8585"
    };
    this.refs.colorindicator.setAttribute("style", "background-color:" + colors[decision] + ";");
    this.props.Paper.decision = decision;
    this.props.onDecisionChange(this.props.Paper.id);
  }

  myFunc() {
    let isExpanded = this.state.isExpanded;
    this.setState({ isExpanded: !isExpanded });
    console.log(this.props.coolpapers);
  }

  render() {
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
      <tr onClick={this.myFunc.bind(this)} ref="colorindicator">
        <td className="grow">
          <h5>{this.props.Paper.title}</h5>
          {this.state.isExpanded && this.props.Paper.abstract}
        </td>
        <td className="decisionbutton">
          {this.state.isExpanded ? buttons : this.props.Paper.decision}
        </td>
      </tr>
    );
  }
}

function mapStateToProps(state) {
  return {
    coolpapers: state.papers
  }
}

export default connect(mapStateToProps)(PaperItem);
