import './index.css'

import { Colors, Decision } from '../../../Constants';
import { Panel, PanelGroup } from 'react-bootstrap';
import { PaperFields, SearchLogic } from '../../../Constants';
import React, { Component } from 'react';

import PaperBody from '../PaperBody';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectRow } from '../../../Actions';

class Papers extends Component {
  constructor(props, context) {
    super(props, context);

    this.applySearchLogic = this.applySearchLogic.bind(this);
    this.isEligibleToShow = this.isEligibleToShow.bind(this);
  }


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

  applySearchLogic(searchText, termObject) {
    // part of isEligibleToShow()
    // would be best to make it a nested function but I don't know how
    switch (termObject.logic) {
      case SearchLogic.CONTAINING:
        return searchText.includes(termObject.term);
      case SearchLogic.NOTCONTAINING:
        return !searchText.includes(termObject.term);
      default:
      // this should never be reached since the SearchLogic is an enum
      // and all the options are covered in the cases above
    }
  }

  isEligibleToShow(paper, termObject) {
    // perform the logic to decide if the paper should be displayed to
    // the user given the search terms that the user has currently set
    switch (termObject.field) {
      case PaperFields.ALL:
        return this.applySearchLogic(Object.values(paper).join(" "), termObject);
      case PaperFields.TITLE:
        return this.applySearchLogic(paper.title, termObject);
      case PaperFields.ABSTRACT:
        return this.applySearchLogic(paper.abstract, termObject);
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
    this.props.searchwords.forEach(termObject => {
      papers = papers.filter(paper => this.isEligibleToShow(paper, termObject));
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
    searchwords: state.searchwords,
    activeRowIndex: state.activeRowIndex
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectRow: selectRow }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Papers);