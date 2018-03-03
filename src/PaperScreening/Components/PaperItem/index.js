import './index.css';

import React, { Component } from 'react';

import { Button } from 'react-bootstrap';
import Decision from '../../../Constants';

class PaperItem extends Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false
    }
  }

  changeColor(decision) {
    let colors = {
      "include": "#83ddb2",
      "maybe": "#cde9ff",
      "exclude": "#eeab9e"
    };
    this.refs.colorindicator.setAttribute("style", "background-color:" + colors[decision] + ";");
    this.props.Paper.decision = decision;
    this.props.onDecisionChange(this.props.Paper.id);
  }

  grow() {
    // e.target.parentNode.parentNode.setAttribute("style", "height: 100%;");
    console.log("hovering");
  }

  myFunc() {
    let isExpanded = this.state.isExpanded;
    this.setState({ isExpanded: !isExpanded });
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

PaperItem.propTypes = {
  Paper: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default PaperItem;
