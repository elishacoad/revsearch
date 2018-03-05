import './index.css'

import React, { Component } from 'react';

import Decision from '../../../Constants';
import PaperItem from '../PaperItem';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

class Papers extends Component {
  render() {
    let paperItems;
    if (this.props.papers.length !== 0) {
      paperItems = this.props.papers.map(paper => {
        if (this.props.filters.showIncludes && paper.decision === Decision.INCLUDE){
          return <PaperItem key={paper.id} paper={paper} />
        }
        if (this.props.filters.showExcludes && paper.decision === Decision.EXCLUDE){
          return <PaperItem key={paper.id} paper={paper} />
        }
        if (this.props.filters.showMaybes && paper.decision === Decision.MAYBE){
          return <PaperItem key={paper.id} paper={paper} />
        }
        if (this.props.filters.showUndecided && paper.decision === Decision.NONE){
          return <PaperItem key={paper.id} paper={paper} />
        }
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
    papers: state.papers,
    filters: state.filters
  }
}

export default connect(mapStateToProps)(Papers);