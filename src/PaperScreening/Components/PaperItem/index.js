import './index.css';

import React, { Component } from 'react';

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
      "include": "#C0ED7B",
      "maybe": "#89CDC2",
      "exclude": "#FF8585"
    };
    this.refs.paper.setAttribute("style", "background-color:" + colors[decision] + ";");
    this.props.Paper.decision = decision;
    this.props.onDecisionChange(this.props.Paper.id);
  }
  
  grow() {
    // e.target.parentNode.parentNode.setAttribute("style", "height: 100%;");
    console.log("hovering");
  }

  myFunc() {
    let isExpanded = this.state.isExpanded;
    isExpanded ?
      this.refs.paperdiv.setAttribute("style", "height: 0px;"):
      this.refs.paperdiv.setAttribute("style", "height: 100%;");
    this.setState({isExpanded: !isExpanded});
  }

  render() {
    return (
      <div className="Paper" ref="paper" style={{ "backgroundColor": "lightgray" }} onClick={this.myFunc.bind(this)}>
        <div className="paperheader">
          <h3>{this.props.Paper.title}</h3>
          <button href="" onClick={this.changeColor.bind(this, Decision.INCLUDE)}> Include </button>
          <button href="" onClick={this.changeColor.bind(this, Decision.EXCLUDE)}> Exclude </button>
          <button href="" onClick={this.changeColor.bind(this, Decision.MAYBE)}> Maybe </button>
        </div>
        <p className="grow" ref="paperdiv">
          {this.props.Paper.abstract}
        </p>
      </div>
    );
  }
}

PaperItem.propTypes = {
  Paper: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default PaperItem;
