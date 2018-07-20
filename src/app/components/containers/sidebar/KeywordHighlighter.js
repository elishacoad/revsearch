import React, { Component } from 'react';
import { FormControl, Glyphicon, Panel } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { setHighlightwords } from 'Actions';

class Keywords extends Component {
    constructor(props, context) {
        super(props, context);

        this.addKeyword = this.addKeyword.bind(this);
        this.deleteKeyword = this.deleteKeyword.bind(this);

        this.state = {
            positivekeyword_inputvalue: '',
        };
    }

    addKeyword(e) {
        if (e.charCode !== 13) return;
        const { positiveWords } = this.props.highlightWords;
        if (positiveWords.includes(e.target.value)) return;
        positiveWords.push(e.target.value);
        this.setState({
            positivekeyword_inputvalue: '',
        });
        this.props.setHighlightwords({ ...this.props.highlightWords, positiveWords });
    }

    deleteKeyword(word) {
        const { positiveWords } = this.props.highlightWords;
        const index = positiveWords.indexOf(word);
        if (index !== -1) positiveWords.splice(index, 1);
        this.props.setHighlightwords({ ...this.props.highlightWords, positiveWords });
    }

    render() {
        return (
            <Panel defaultExpanded id="accordion-keywords">
                <Panel.Toggle>
                    <Panel.Heading className="sidebar-panel-heading">
                        <Panel.Title className="sidebar-panel-title">
                            Keywords
                        </Panel.Title>
                    </Panel.Heading>
                </Panel.Toggle>
                <Panel.Collapse>
                    <Panel.Body>
                        <FormControl
                            type="text"
                            value={this.state.positivekeyword_inputvalue}
                            placeholder="+ add positive word"
                            onChange={e => this.setState({
                                positivekeyword_inputvalue: e.target.value,
                            })}
                            onKeyPress={this.addKeyword}
                        />
                        {this.props.highlightWords.positiveWords.length > 0 && <br />}
                        <ul className="list-keyword green">
                            {this.props.highlightWords.positiveWords.map(word => (
                                <li key={uuid.v1()}>
                                    {`${word}  `}
                                    <Glyphicon onClick={() => this.deleteKeyword(word)} glyph="remove" />
                                </li>
                            ))}
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
        highlightWords: state.highlightWords,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        setHighlightwords,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Keywords);
