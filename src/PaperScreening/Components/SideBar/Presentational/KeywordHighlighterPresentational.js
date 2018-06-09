import { Colors, FormControl, Glyphicon } from '../../../../Elements/constants';

import { Glyphicon } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import React from 'react'

const KeywordHighlighterPresentational = (props) =>
    <Panel style={{ "borderColor": "gray" }}>
        <Panel.Toggle>
            <Panel.Heading
                style={{
                    "backgroundColor": Colors.REVNAVY,
                    "cursor": "pointer"
                }}
            >
                <Panel.Title style={{ "color": "white" }}>Keywords</Panel.Title>
            </Panel.Heading>
        </Panel.Toggle>
        <Panel.Collapse>
            <Panel.Body>
                <FormControl
                    type="text"
                    value={props.positivekeyword_inputvalue}
                    placeholder="+ add positive word"
                    onChange={(e) => this.setState({ positivekeyword_inputvalue: e.target.value })}
                    onKeyPress={this.addPositiveWord}
                />
                {props.keywords.positiveWords.length > 0 && <br></br>}
                <ul style={{ "color": "#00994d" }}>
                    {props.keywords.positiveWords.map((word, idx) => {
                        return (
                            <li key={idx}>
                                {word + "  "}
                                <Glyphicon onClick={this.deleteKeyword.bind(this, word)} glyph="remove" />
                            </li>
                        );
                    })}
                </ul>
                <hr></hr>
                <FormControl
                    type="text"
                    value={this.state.negativekeyword_inputvalue}
                    placeholder="+ add negative word"
                    onChange={(e) => this.setState({ negativekeyword_inputvalue: e.target.value })}
                    onKeyPress={this.addNegativeWord}
                />
                {props.keywords.negativeWords.length > 0 && <br></br>}
                <ul style={{ "color": "#990000" }}>
                    {this.props.keywords.negativeWords.map((word, idx) => {
                        return (
                            <li key={idx}>
                                {word + "  "}
                                <Glyphicon onClick={this.deleteKeyword.bind(this, word)} glyph="remove" />
                            </li>
                        );
                    })}
                </ul>
            </Panel.Body>
        </Panel.Collapse>
    </Panel>


export default KeywordHighlighterPresentational;