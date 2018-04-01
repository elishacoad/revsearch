import './index.css';

import { Button, Panel } from 'react-bootstrap';
import { Colors, Decision } from '../../../Constants';
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { changeDecision } from '../../../Actions';
import { connect } from 'react-redux';

class PaperItem extends Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false
    }
  }

  changeColor(decision) {
    this.props.paper.decision = decision;
    this.props.changeDecision(this.props.paper);
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
          className="decisionbutton include-btn" onClick={this.changeColor.bind(this, Decision.INCLUDE)}>
          Include
        </Button>
        <Button href=""
          style={{ "backgroundColor": Colors.MAYBE }}
          className="decisionbutton maybe-btn" onClick={this.changeColor.bind(this, Decision.MAYBE)}>
          Maybe
        </Button>
        <Button href=""
          style={{ "backgroundColor": Colors.EXCLUDE }}
          className="decisionbutton exclude-btn" onClick={this.changeColor.bind(this, Decision.EXCLUDE)}>
          Exclude
        </Button>
      </div >
    );
    return (
      <Panel
        eventKey={this.props.eventKey}
        style={{ "borderColor": Colors["DARK" + this.props.paper.decision.toUpperCase()] }}
      >
        <Panel.Heading
          style={{ "backgroundColor": Colors[this.props.paper.decision.toUpperCase()] }}
        >
          <Panel.Title toggle>{this.props.paper.title}</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible>
          <h4>{this.props.paper.title}</h4>
          <br/>
          {buttons}
          {this.props.paper.abstract}
          {this.props.paper.fulltextlink && (
            <div>
              <br />
              <a
                href={this.props.paper.fulltextlink}
                target="_blank"
                style={{ "fontstyle": "italic" }}>
                Link to Article
            </a>
            </div>
          )}
        </Panel.Body>
      </Panel>
    );
  }
}

function mapStateToProps(state) {
  return {
    papers: state.papers
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ changeDecision: changeDecision }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PaperItem);
