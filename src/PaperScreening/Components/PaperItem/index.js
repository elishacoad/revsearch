import { Button } from 'react-bootstrap';
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
          style={{ "borderColor": Colors["DARK" + this.props.paper.decision.toUpperCase()] }}
          className="decisionbutton include-btn" onClick={this.changeColor.bind(this, Decision.INCLUDE)}>
          Include
        </Button>
        <Button href=""
          style={{ "borderColor": Colors["DARK" + this.props.paper.decision.toUpperCase()] }}
          className="decisionbutton maybe-btn" onClick={this.changeColor.bind(this, Decision.MAYBE)}>
          Maybe
        </Button>
        <Button href=""
          style={{ "borderColor": Colors["DARK" + this.props.paper.decision.toUpperCase()] }}
          className="decisionbutton exclude-btn" onClick={this.changeColor.bind(this, Decision.EXCLUDE)}>
          Exclude
        </Button>
      </div >
    );
    return (
      <div className="paper" onClick={this.rowClicked.bind(this)} style={{ "borderColor": Colors["DARK" + this.props.paper.decision.toUpperCase()], "backgroundColor": Colors[this.props.paper.decision.toUpperCase()] }}>
        <div className="title"><h4>{this.props.paper.title}</h4></div>
        <div className="dropdown">
          {this.state.isExpanded && (
            <h3 className="full-title">{this.props.paper.title}</h3>)
          }
          <td className="grow">
            {this.state.isExpanded && this.props.paper.abstract}
            {(this.state.isExpanded && this.props.paper.fulltextlink) && (
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
          </td>
          {this.state.isExpanded && (
            <td className="decisionbutton">
              {buttons}
            </td>)
          }
        </div>
      </div>
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
