import React, { Component } from 'react';

class PaperItem extends Component {
  changeColor(e) {
    e.target.parentNode.parentNode.setAttribute("style", "background-color:blue;");
    e.preventDefault();
  }

  render() {
    return (
      <div className="Paper jumbotron bg-info" style={{ "backgroundColor": "lightgray" }}>
        <h3>{this.props.Paper.title}</h3>
        <p>{this.props.Paper.category}</p>
        <p>
          {this.props.Paper.absract}
          <a href="" onClick={this.changeColor}> Include </a>
          <a href="" onClick={this.changeColor}> Exclude </a>
          <a href="" onClick={this.changeColor}> Maybe </a>
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
