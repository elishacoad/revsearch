import React, { Component } from 'react';

import PaperItem from '../PaperItem';
import { Table } from 'react-bootstrap';

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
        <Table hover bordered>
          <thead>
            <tr>
              <th>Paper</th>
              <th>Decision</th>
            </tr>
          </thead>
          <tbody>
            {PaperItems}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Papers;
