import { Colors, Decision, PaperFields, SearchLogic } from '../../../Elements/constants';
import { Panel, PanelGroup } from 'react-bootstrap';
import React, { Component } from 'react';

import PaperBody from '../PaperBody';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectRow } from '../../../Actions';

class Papers extends Component {
  constructor(props, context) {
    super(props, context);

    this.isEligibleToShow = this.isEligibleToShow.bind(this);
  }


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

  /**
   * Perform the logic to decide if the paper should be displayed to
   * the user given the search terms that the user has currently set.
  */  
  isEligibleToShow(paper, group) {
    let applySearchLogic = (searchText, group) => {
      switch (group.logic) {
        case SearchLogic.CONTAINING:
          return group.terms.every(term => searchText.includes(term));
        case SearchLogic.NOTCONTAINING:
          return group.terms.every(term => !searchText.includes(term));
        default:
          // this should never be reached since the SearchLogic is an enum
          // and all the options are covered in the cases above
      }
    }
    switch (group.field) {
      case PaperFields.ALL:
        return applySearchLogic(Object.values(paper).join(" "), group);
      case PaperFields.TITLE:
        return applySearchLogic(paper.title, group);
      case PaperFields.ABSTRACT:
        return applySearchLogic(paper.abstract, group);
      default:
        // this should never be reached since the PaperFields is an enum
        // and all the options are covered in the cases above
    }
  }

  render() {
    let paperItems;
    let papers = this.props.papers;
    // only display papers that match the search criteria
    // TODO: Make more efficient! O(n^2) right now!
    this.props.searchgroups.forEach(group => {
      papers = papers.filter(paper => this.isEligibleToShow(paper, group));
    });
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
    searchgroups: state.searchgroups,
    activeRowIndex: state.activeRowIndex
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectRow: selectRow }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Papers);