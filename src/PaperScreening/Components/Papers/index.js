import './index.css'

import { Colors, Decision } from '../../../Constants';
import { Panel, PanelGroup } from 'react-bootstrap';
import React, { Component } from 'react';

import PaperBody from '../PaperBody';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectRow } from '../../../Actions';

class Papers extends Component {

  getPanel(paper, eventKey) {
    return (
      <Panel
        eventKey={eventKey}
        style={{ "borderColor": Colors["DARK" + paper.decision.toUpperCase()] }}
        key={paper.id}
      >
        <Panel.Heading
          style={{ "backgroundColor": Colors[paper.decision.toUpperCase()] }}
        >
          <Panel.Title toggle>{paper.title}</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible>
          <PaperBody paper={paper} />
        </Panel.Body>
      </Panel>
    )
  }
  render() {
    let paperItems;
    // only display papers that match the search criteria
    // TODO: Make more efficient! O(n^2) right now!
    let papers = this.props.papers;
    console.log(this.props.searchwords);
    this.props.searchwords.forEach(termObject => {
      papers = papers.filter(paper =>
        (termObject.logic === "Containing" &&
          (termObject.field === "Title" &&  paper.title.includes(termObject.term)) ||
          (termObject.field === "Abstract" &&  paper.abstract.includes(termObject.term))) ||
        (termObject.logic === "Not Containing" &&
          (termObject.field === "Title" &&  !paper.title.includes(termObject.term)) ||
          (termObject.field === "Abstract" &&  !paper.abstract.includes(termObject.term)))
      );
    });
    // apply 'decision' filter to the papers... AKA only show papers 
    // that match the paper-decisions that the user wants to see
    if (papers.length !== 0) {
      // (must do the next line because the maping doesn't have unique keys)
      // eslint-disable-next-line
      paperItems = papers.map((paper, i) => {
        if (this.props.decisionFilter.showIncludes && paper.decision === Decision.INCLUDE) {
          return this.getPanel(paper, i)
        }
        if (this.props.decisionFilter.showExcludes && paper.decision === Decision.EXCLUDE) {
          return this.getPanel(paper, i)
        }
        if (this.props.decisionFilter.showMaybes && paper.decision === Decision.MAYBE) {
          return this.getPanel(paper, i)
        }
        if (this.props.decisionFilter.showUndecided && paper.decision === Decision.NONE) {
          return this.getPanel(paper, i)
        }
      });
    }
    return (
      <PanelGroup
        accordion
        activeKey={this.props.activeRowIndex}
        onSelect={this.props.selectRow}
        id="papers-accordion-uncontrolled"
        className="Papers"
      >
        {paperItems}
      </PanelGroup>
    );
  }
}

function mapStateToProps(state) {
  return {
    papers: state.papers,
    decisionFilter: state.filters,
    searchwords: state.searchwords,
    activeRowIndex: state.activeRowIndex
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectRow: selectRow }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Papers);