import { FormControl, Glyphicon, Panel } from 'react-bootstrap';
import React, { Component } from 'react';

import { Colors } from '../../../../../Constants';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateKeywords } from '../../../../../Actions';

class Keywords extends Component {
    constructor(props, context) {
        super(props, context);

        this.addIncludeWord = this.addIncludeWord.bind(this);
        this.addExcludeWord = this.addExcludeWord.bind(this);

        this.state = {
            open: true,
            includevalue: '',
            excludevalue: ''
        };
    }

    addIncludeWord(e) {
        if (e.charCode !== 13) return;
        let includes = this.props.keywords.includeWords;
        if (includes.includes(e.target.value)) return;
        includes.push(e.target.value);
        this.setState({
            includevalue: ''
        })
        this.props.updateKeywords({
            includeWords: includes
        });
        // var keywordTags = document.getElementsByClassName('highlight-match');
        // console.log(keywordTags.length);
        // for (var i = 0; i < 8; i++) {
        //     console.log(keywordTags[i].textContent);
        //     if (includes.includes(keywordTags[i].textContent)) {
        //         console.log("match");
        //         keywordTags[i].classList.add("positive-word")
        //         keywordTags[i].style.color = "blue";
        //     }
        // }
    }

    addExcludeWord(e) {
        if (e.charCode !== 13) return;
        let excludes = this.props.keywords.excludeWords;
        if (excludes.includes(e.target.value)) return;
        excludes.push(e.target.value);
        this.setState({
            excludevalue: ''
        })
        this.props.updateKeywords({
            excludeWords: excludes
        });
    }

    deleteKeyword(word) {
        let includes = this.props.keywords.includeWords;
        let excludes = this.props.keywords.excludeWords;
        if (includes.includes(word)) {
            let index = this.props.keywords.includeWords.indexOf(word);
            if (index !== -1) includes.splice(index, 1);
        }
        if (excludes.includes(word)) {
            let index = this.props.keywords.includeWords.indexOf(word);
            if (index !== -1) excludes.splice(index, 1);
        }
        this.props.updateKeywords({
            includeWords: includes,
            excludeWords: excludes
        });
    }

    render() {
        return (
            <Panel id="accordion-example" style={{ "borderColor": "gray" }} defaultExpanded>
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
                            value={this.state.includevalue}
                            placeholder="+ add include keyword"
                            onChange={(e) => this.setState({ includevalue: e.target.value })}
                            onKeyPress={this.addIncludeWord}
                        />
                        <br></br>
                        <ul style={{ "color": "#00994d" }}>
                            {this.props.keywords.includeWords.map((word, idx) => {
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
                            value={this.state.excludevalue}
                            placeholder="+ add exclude keyword"
                            onChange={(e) => this.setState({ excludevalue: e.target.value })}
                            onKeyPress={this.addExcludeWord}
                        />
                        <br></br>
                        <ul style={{ "color": "#990000" }}>
                            {this.props.keywords.excludeWords.map((word, idx) => {
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