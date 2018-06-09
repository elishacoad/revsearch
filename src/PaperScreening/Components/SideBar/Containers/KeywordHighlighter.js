import { FormControl, Glyphicon, Panel } from 'react-bootstrap';
import React, { Component } from 'react';

import { Colors } from '../../../../Elements/constants';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateKeywords } from '../../../../Actions';

class Keywords extends Component {
    constructor(props, context) {
        super(props, context);

        this.addPositiveWord = this.addPositiveWord.bind(this);
        this.addNegativeWord = this.addNegativeWord.bind(this);

        this.state = {
            open: false,
            positivekeyword_inputvalue: '',
            negativekeyword_inputvalue: ''
        };
    }

    addPositiveWord(e) {
        if (e.charCode !== 13) return;
        let positiveWords = this.props.keywords.positiveWords;
        if (positiveWords.concat(this.props.keywords.negativeWords).includes(e.target.value)) return;
        positiveWords.push(e.target.value);
        this.setState({
            positivekeyword_inputvalue: ''
        })
        this.props.updateKeywords({
            positiveWords: positiveWords
        });
    }

    addNegativeWord(e) {
        if (e.charCode !== 13) return;
        let negativeWords = this.props.keywords.negativeWords;
        if (negativeWords.concat(this.props.keywords.positiveWords).includes(e.target.value)) return;
        negativeWords.push(e.target.value);
        this.setState({
            negativekeyword_inputvalue: ''
        })
        this.props.updateKeywords({
            negativeWords: negativeWords
        });
    }

    deleteKeyword(word) {
        let positiveWords = this.props.keywords.positiveWords;
        let negativeWords = this.props.keywords.negativeWords;
        let index = positiveWords.indexOf(word);
        if (index !== -1) positiveWords.splice(index, 1);
        index = negativeWords.indexOf(word);
        if (index !== -1) negativeWords.splice(index, 1);
        this.props.updateKeywords({
            positiveWords: positiveWords,
            negativeWords: negativeWords
        });
    }

    render() {
        return (
            <Panel id="accordion-example" style={{ "borderColor": "gray" }}>
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
                            value={this.state.positivekeyword_inputvalue}
                            placeholder="+ add positive word"
                            onChange={(e) => this.setState({ positivekeyword_inputvalue: e.target.value })}
                            onKeyPress={this.addPositiveWord}
                        />
                        {this.props.keywords.positiveWords.length > 0 && <br></br>}
                        <ul style={{ "color": "#00994d" }}>
                            {this.props.keywords.positiveWords.map((word, idx) => {
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
                        {this.props.keywords.negativeWords.length > 0 && <br></br>}
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
        );
    }
}

function mapStateToProps(state) {
    return {
        papers: state.papers,
        keywords: state.keywords
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        updateKeywords: updateKeywords
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Keywords);