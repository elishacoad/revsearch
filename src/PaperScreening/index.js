import { Col, ProgressBar, Row } from 'react-bootstrap';
import React, { Component } from 'react';

import AddCorpus from './Components/AddCorpus';
import Decision from '../Constants';
import Papers from './Components/Papers';

class PaperScreening extends Component {
  constructor() {
    super();
    this.state = {
      Papers: [],
      renderAddCorpus: true,
      includes: 0,
      maybes: 0,
      excludes: 0
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  handleAddCorpus(corpus) {
    this.setState({ Papers: corpus });
  }

  handleDecisionChange(id) {
    let Papers = this.state.Papers;
    let includes = 0;
    let excludes = 0;
    let maybes = 0;
    Papers.forEach(paper => {
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
      this.setState({
        includes: includes,
        excludes: excludes,
        maybes: maybes
      });
    });
  }

  handleCorpusUnmount() {
    this.setState({ renderAddCorpus: false });
  }

  getPercent(count) {
    return this.state.Papers.length === 0 ? 0 : (count / this.state.Papers.length) * 100;
  }

  render() {
    if (this.state.renderAddCorpus || this.state.Papers.length === 0) {
      return (
        <div className="App">
          <AddCorpus addCorpus={this.handleAddCorpus.bind(this)} unmountMe={this.handleCorpusUnmount.bind(this)} />
        </div>
      );
    }
    else {
      let pdecided = Math.round(this.getPercent(this.state.includes + this.state.excludes));
      let pincluded = Math.round(this.getPercent(this.state.includes));
      let pexcluded = Math.round(this.getPercent(this.state.excludes));
      return (
          <Row>
            <Col xs={12} md={3} lg={3}>
              <ProgressBar now={pdecided} label={`${pdecided}%`} />
              <ProgressBar now={pincluded} label={`${pincluded}%`} bsStyle="success" />
              <ProgressBar now={pexcluded} label={`${pexcluded}%`} bsStyle="danger" />

            </Col>
            <Col xs={12} md={9} lg={9}>
              <Papers Papers={this.state.Papers} onDecisionChange={this.handleDecisionChange.bind(this)} />
            </Col>
          </Row>
      );
    }
  }
}

export default PaperScreening;
