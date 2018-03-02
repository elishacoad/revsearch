import './index.css';

import React, { Component } from 'react';

class PaperItem extends Component {
  changeColor(e, color) {
    console.log(color);
    e.target.parentNode.parentNode.setAttribute("style", "background-color:" + color + ";");
    e.preventDefault();
  }

  myFunc(){
    console.log("hovering");
  }

  render() {
    return (
      <div className="Paper" style={{ "backgroundColor": "lightgray" }} onMouseOver={this.myFunc}>
        <div className="paperheader">
          <h3>{this.props.Paper.title}</h3>
          <button href="" onClick={(e) => this.changeColor(e, "green")}> Include </button>
          <button href="" onClick={(e) => this.changeColor(e, "red")}> Exclude </button>
          <button href="" onClick={(e) => this.changeColor(e, "blue")}> Maybe </button>
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
