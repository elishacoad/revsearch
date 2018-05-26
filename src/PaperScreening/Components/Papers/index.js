import './index.css'

import { Colors, Decision } from '../../../Constants';
import { Panel, PanelGroup } from 'react-bootstrap';
import React, { Component } from 'react';

import Highlighter from "react-highlight-words";
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
    if (this.props.papers.length !== 0) {
      // eslint-disable-next-line
      paperItems = this.props.papers.map((paper, i) => {
        if (this.props.filters.showIncludes && paper.decision === Decision.INCLUDE) {
          return this.getPanel(paper, i)
        }
        if (this.props.filters.showExcludes && paper.decision === Decision.EXCLUDE) {
          return this.getPanel(paper, i)
        }
        if (this.props.filters.showMaybes && paper.decision === Decision.MAYBE) {
          return this.getPanel(paper, i)
        }
        if (this.props.filters.showUndecided && paper.decision === Decision.NONE) {
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
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={["and", "or", "the"]}
          autoEscape={true}
          textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
          />
        {paperItems}
      </PanelGroup>
    );
  }
}

function mapStateToProps(state) {
  return {
    papers: state.papers,
    filters: state.filters,
    activeRowIndex: state.activeRowIndex
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectRow: selectRow }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Papers);