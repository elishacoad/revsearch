import './index.css'

import React, { Component } from 'react';

import PaperItem from '../PaperItem';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

class Papers extends Component {
  render() {
    let paperItems;
    if (this.props.papers.length !== 0) {
      paperItems = this.props.papers.map(paper => {
        return (
          <PaperItem key={paper.id} paper={paper} />
        );
      });
    }
    return (
      <div className="Papers" >
        <Table hover className="table-fixed">
          <tbody>
            {paperItems}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    papers: state.papers
  }
}

export default connect(mapStateToProps)(Papers);