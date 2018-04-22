import { Checkbox, FormControl, Glyphicon, Panel } from 'react-bootstrap';
import React, { Component } from 'react';
import { addCorpusAction, updateFilter } from '../../../../../Actions';

import { Colors } from '../../../../../Constants';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Keywords extends Component {
    constructor(props, context) {
        super(props, context);

        this.addIncludeWord = this.addIncludeWord.bind(this);
        this.addExcludeWord = this.addExcludeWord.bind(this);
        this.colorPapers = this.colorPapers.bind(this);

        this.state = {
            open: true,
            includeWords: [],
            excludeWords: [],
            value: ''
        };
    }

    addIncludeWord(e) {
        if (e.charCode === 13) {
            let includes = this.state.includeWords;
            if (this.state.includeWords.includes(e.target.value)) return;
            includes.push(e.target.value);
            this.setState({
                includeWords: includes,
                value: ''
            });
            this.colorPapers();
        }
    }

    addExcludeWord(e) {
        let excludes = this.state.excludeWords;
        excludes.push(e.target.value);
        e.target.value = '';
        this.setState({ excludeWords: excludes });
    }

    colorPapers() {
        // let abstracts = document.getElementsByClassName('words-to-color-abstract');
        let papers = this.props.papers.map((paper) => {
            paper.abstract = paper.abstract.split(" ").map((word) => {
                return this.state.includeWords.includes(word) ? `<font color="green">${word}</font>` : word;
            }).join(" ");
            return paper;
        });
        this.props.addCorpusAction(papers);
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
                        <Glyphicon glyph="plus" />Inclusion
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Add new keyword"
                            onChange={(e) => this.setState({ value: e.target.value })}
                            onKeyPress={this.addIncludeWord}
                        />
                        {this.state.includeWords.map((includeWord, idx) => {
                            return (
                                <Checkbox defaultChecked key={idx}> {includeWord} </Checkbox>
                            );
                        })}
                    </Panel.Body>
                </Panel.Collapse>
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
    return bindActionCreators({
        updateFilter: updateFilter,
        addCorpusAction: addCorpusAction
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Keywords);