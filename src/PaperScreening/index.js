import { Col, Row } from 'react-bootstrap';
import React, { Component } from 'react';

import AddCorpus from './Containers/AddCorpus';
import Papers from './Containers/Papers';
import Sidebar from './Components/SideBar';
import { connect } from 'react-redux';

class PaperScreening extends Component {
  render() {
    if (this.props.papers.length === 0) {
      return (
        <div className="App">
          <AddCorpus />
        </div>
      );
    }
    else {
      return (
        <Row>
          <Col xs={12} md={3} lg={3} className="sidebar">
            <Sidebar />
          </Col>
          <Col xs={12} md={9} lg={9} className="paper-review-col">
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
