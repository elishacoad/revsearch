import { Col, ProgressBar, Row } from 'react-bootstrap';
import React, { Component } from 'react';

import AddCorpus from './Components/AddCorpus';
import Decision from '../Constants';
import Papers from './Components/Papers';
import { connect } from 'react-redux';

class PaperScreening extends Component {
  constructor() {
    super();
    this.state = {
      renderAddCorpus: true,
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  handleCorpusUnmount() {
    this.setState({ renderAddCorpus: false });
  }

  getPercent(count) {
    return this.props.papers.length === 0 ? 0 : (count / this.props.papers.length) * 100;
  }

  tallyDecisions() {
    let includes = 0;
    let excludes = 0;
    let maybes = 0;
    this.props.papers.forEach(paper => {
      switch (paper.decision) {
        case Decision.INCLUDE:
          includes += 1;
          break;
        case Decision.EXCLUDE:
          excludes += 1;
          break;
        case Decision.MAYBE:
          maybes += 1;
          break;
        case Decision.NONE:
          break;
        default:
          console.log(paper.decision + " is not a valid decision");
      }
    });
    return {
        includes: includes,
        excludes: excludes,
        maybes: maybes
  }
  }

  render() {
    if (this.state.renderAddCorpus || this.props.papers.length === 0) {
      return (
        <div className="App">
          <AddCorpus unmountMe={this.handleCorpusUnmount.bind(this)} />
        </div>
      );
    }
    else {
      let counts = this.tallyDecisions();
      let pdecided = Math.round(this.getPercent(counts.includes + counts.excludes));
      let pincluded = Math.round(this.getPercent(counts.includes));
      let pexcluded = Math.round(this.getPercent(counts.excludes));
      return (
          <Row>
            <Col xs={12} md={3} lg={3}>
              <ProgressBar now={pdecided} label={`${pdecided}%`} />
              <ProgressBar now={pincluded} label={`${pincluded}%`} bsStyle="success" />
              <ProgressBar now={pexcluded} label={`${pexcluded}%`} bsStyle="danger" />
            </Col>
            <Col xs={12} md={9} lg={9}>
            <Papers />
            </Col>
          </Row>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    papers: state.papers
  }
}

export default connect(mapStateToProps)(PaperScreening);
