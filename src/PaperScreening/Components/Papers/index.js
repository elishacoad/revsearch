import React, { Component } from 'react';

import { Decision } from '../../../Constants';
import { PanelGroup } from 'react-bootstrap';
import PaperItem from '../PaperItem';
import { connect } from 'react-redux';

class Papers extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      activeKey: 0
    };
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    let paperItems;
    if (this.props.papers.length !== 0) {
      // eslint-disable-next-line
      paperItems = this.props.papers.map((paper, i) => {
        if (this.props.filters.showIncludes && paper.decision === Decision.INCLUDE) {
          return <PaperItem key={paper.id} paper={paper} eventKey={i} />
        }
        if (this.props.filters.showExcludes && paper.decision === Decision.EXCLUDE) {
          return <PaperItem key={paper.id} paper={paper} eventKey={i} />
        }
        if (this.props.filters.showMaybes && paper.decision === Decision.MAYBE) {
          return <PaperItem key={paper.id} paper={paper} eventKey={i} />
        }
        if (this.props.filters.showUndecided && paper.decision === Decision.NONE) {
          return <PaperItem key={paper.id} paper={paper} eventKey={i} />
        }
      });
    }
    return (
      <PanelGroup
        // accordion
        activeKey={this.state.activeKey}
        onSelect={this.handleSelect}
        id="accordion-uncontrolled-example"
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
    filters: state.filters
  }
}

export default connect(mapStateToProps)(Papers);