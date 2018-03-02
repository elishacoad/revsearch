import React, { Component } from 'react';

import PaperItem from './PaperItem/index';

class Papers extends Component {
  onDecisionChange(id) {
    this.props.onDecisionChange(id);
  }

  render() {
    let PaperItems;
    if (this.props.Papers) {
      PaperItems = this.props.Papers.map(Paper => {
        return (
          <PaperItem onDecisionChange={this.onDecisionChange.bind(this)} key={Paper.id} Paper={Paper} />
        );
      });
    }
    return (
      <div className="Papers">
        <h3>Latest Papers</h3>
        {PaperItems}
      </div>
    );
  }
}

Papers.propTypes = {
  Papers: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Papers;
