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
        <Panel.Toggle>
          <Panel.Heading
            style={{ "backgroundColor": Colors[paper.decision.toUpperCase()] }}
          >
            <Panel.Title>{paper.title}</Panel.Title>
          </Panel.Heading>
        </Panel.Toggle>
        <Panel.Collapse>
          <Panel.Body>
            <PaperBody paper={paper} />
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
    )
  }
  render() {
    let paperItems;
    // only display papers that match the search criteria
    // TODO: Make more efficient! O(n^2) right now!
    let papers = this.props.papers;
    this.props.searchwords.includeWords.forEach(includeWord => {
      papers = papers.filter(paper =>
        paper.abstract.includes(includeWord) || paper.title.includes(includeWord)
      );
    });
    this.props.searchwords.excludeWords.forEach(excludeWord => {
      papers = papers.filter(paper =>
        !(paper.abstract.includes(excludeWord) || paper.title.includes(excludeWord))
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