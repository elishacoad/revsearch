import { Button, Col, Row } from 'react-bootstrap';
import { Colors, Decision } from '../../../Elements/constants';
import React, { Component } from 'react';

import Highlighter from "react-highlight-words";

class PaperBodyPresentational extends Component {
    render() {
        return (
            <Row>
                <Col xs={12} sm={10}>
                    <div className="paperbody">
                        <h5>
                            <Highlighter
                                highlightClassName="highlight-good"
                                searchWords={this.props.keywords.positiveWords}
                                autoEscape={true}
                                textToHighlight={this.props.paper.title}
                            />
                        </h5>
                        <hr></hr>
                        <Highlighter
                            highlightClassName="highlight-good"
                            searchWords={this.props.keywords.positiveWords}
                            autoEscape={true}
                            textToHighlight={this.props.paper.abstract}
                        />
                    </div>
                    {this.props.paper.fulltextlink && (
                        <a
                            href={this.props.paper.fulltextlink}
                            target="_blank"
                            style={{ "fontstyle": "italic" }}
                        >
                            Link to Article
                        </a>
                    )}
                </Col>
                <Col xs={12} sm={2}>
                    <div>
                        <Button
                            href=""
                            style={{ "backgroundColor": Colors.INCLUDE }}
                            className="decisionbutton" onClick={this.props.handleDecisionButtonClick(Decision.INCLUDE)}
                        >
                            Include
                        </Button>
                        <Button
                            href=""
                            style={{ "backgroundColor": Colors.MAYBE }}
                            className="decisionbutton" onClick={this.props.handleDecisionButtonClick(Decision.MAYBE)}
                        >
                            Maybe
                        </Button>
                        <Button
                            href=""
                            style={{ "backgroundColor": Colors.EXCLUDE }}
                            className="decisionbutton" onClick={this.props.handleDecisionButtonClick(Decision.EXCLUDE)}
                        >
                            Exclude
                        </Button>
                    </div >
                </Col>
            </Row>
        );
    }
}


export default PaperBodyPresentational;
