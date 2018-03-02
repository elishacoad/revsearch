import './index.css';

import React, { Component } from 'react';

import Decision from '../../Constants';

class PaperItem extends Component {
  changeColor(e, decision) {
    e.preventDefault();
    let colors = {
      "include": "green",
      "maybe": "blue",
      "exclude": "red"
    };
    e.target.parentNode.parentNode.setAttribute("style", "background-color:" + colors[decision] + ";");
    this.props.Paper.decision = decision;
    this.props.onDecisionChange(this.props.Paper.id);
  }
  
  grow() {
    // e.target.parentNode.parentNode.setAttribute("style", "height: 100%;");
    console.log("hovering");
  }

  render() {
    return (
      <div className="Paper" style={{ "backgroundColor": "lightgray" }} onClick={this.myFunc}>
        <div className="paperheader">
          <h3>{this.props.Paper.title}</h3>
          <button href="" onClick={(e) => this.changeColor(e, Decision.INCLUDE)}> Include </button>
          <button href="" onClick={(e) => this.changeColor(e, Decision.EXCLUDE)}> Exclude </button>
          <button href="" onClick={(e) => this.changeColor(e, Decision.MAYBE)}> Maybe </button>
        </div>
        <p className="grow">
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
