import './index.css';

import { Button, Col, Row } from 'react-bootstrap';
import { Colors, Decision } from '../../../Constants';
import React, { Component } from 'react';
import { changeDecision, incrementRow } from '../../../Actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class PaperBody extends Component {

  handleChangeDecision(decision) {
    this.props.paper.decision = decision;
    this.props.changeDecision(this.props.paper);
    this.props.incrementRow();
  }

  rowClicked() {
    let isExpanded = this.state.isExpanded;
    this.setState({ isExpanded: !isExpanded });
  }

  render() {
    const buttons = (
      <div>
        <Button href=""
          style={{ "backgroundColor": Colors.INCLUDE }}
          className="decisionbutton" onClick={this.handleChangeDecision.bind(this, Decision.INCLUDE)}>
          Include
        </Button>
        <Button href=""
          style={{ "backgroundColor": Colors.MAYBE }}
          className="decisionbutton" onClick={this.handleChangeDecision.bind(this, Decision.MAYBE)}>
          Maybe
        </Button>
        <Button href=""
          style={{ "backgroundColor": Colors.EXCLUDE }}
          className="decisionbutton" onClick={this.handleChangeDecision.bind(this, Decision.EXCLUDE)}>
          Exclude
        </Button>
      </div >
    );
    return (
      <Row>
        <Col xs={12} sm={10}>
          <h5>{this.props.paper.title}</h5>
          <hr></hr>
          {this.props.paper.abstract}
          {this.props.paper.fulltextlink && (
            <div>
              <a
                href={this.props.paper.fulltextlink}
                target="_blank"
                style={{ "fontstyle": "italic" }}>
                Link to Article
            </a>
            </div>
          )}
        </Col>
        <Col xs={12} sm={2}>
          {buttons}
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    papers: state.papers
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeDecision: changeDecision,
      incrementRow: incrementRow
    }, 
    dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PaperBody);
