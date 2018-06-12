import React, { Component } from 'react';
import { FormControl, Glyphicon, Panel } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { Colors } from '../../../globals/constants';
import { updateHighlightwords } from '../../../redux/actions';

class Keywords extends Component {
    constructor(props, context) {
        super(props, context);

        this.addPositiveWord = this.addPositiveWord.bind(this);
        this.deleteKeyword = this.deleteKeyword.bind(this);

        this.state = {
            positivekeyword_inputvalue: '',
        };
    }

    addPositiveWord(e) {
        if (e.charCode !== 13) return;
        const { positiveWords } = this.props.keywords;
        if (positiveWords
            .concat(this.props.keywords.negativeWords)
            .includes(e.target.value)) return;
        positiveWords.push(e.target.value);
        this.setState({
            positivekeyword_inputvalue: '',
        });
        this.props.updateHighlightwords({ ...this.props.keywords, positiveWords });
    }

    deleteKeyword(word) {
        const { positiveWords } = this.props.keywords;
        const index = positiveWords.indexOf(word);
        if (index !== -1) positiveWords.splice(index, 1);
        this.props.updateHighlightwords({ ...this.props.keywords, positiveWords });
    }

    render() {
        return (
            <Panel id="accordion-example" style={{ borderColor: 'gray' }}>
                <Panel.Toggle>
                    <Panel.Heading
                        style={{
                            backgroundColor: Colors.REVNAVY,
                            cursor: 'pointer',
                        }}
                    >
                        <Panel.Title style={{ color: 'white' }}>
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
                            onKeyPress={this.addPositiveWord}
                        />
                        {this.props.keywords.positiveWords.length > 0 && <br />}
                        <ul style={{ color: '#00994d' }}>
                            {this.props.keywords.positiveWords.map(word => (
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
        keywords: state.keywords,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        updateHighlightwords,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Keywords);
