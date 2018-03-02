import React, { Component } from 'react';

class PaperItem extends Component {
  deletePaper(id) {
    this.props.onDelete(id);
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  render() {
    return (
      <div className="Paper" style={{ "background-color": "lightgray" }}>
        <h3>{this.props.Paper.title}</h3>
        <p>{this.props.Paper.category}</p>
        <p>{this.props.Paper.absract}
          <a href="#" onClick={this.deletePaper.bind(this, this.props.Paper.id)}>
            Delete
          </a>
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
