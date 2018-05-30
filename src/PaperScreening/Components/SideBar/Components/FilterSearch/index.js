import { Button, DropdownButton, FormControl, Glyphicon, MenuItem, Panel } from 'react-bootstrap';
import React, { Component } from 'react';
import { addCorpusAction, updateSearchwords } from '../../../../../Actions';

import { Colors } from '../../../../../Constants';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class FilterSearch extends Component {
    constructor(props, context) {
        super(props, context);

        this.addIncludeWord = this.addIncludeWord.bind(this);
        this.addExcludeWord = this.addExcludeWord.bind(this);

        this.state = {
            open: false,
            searchgroups: [],
            inputvalue: ''
        };
    }
    addSearchGroup() {
        this.setState({
            searchgroups: this.state.searchgroups.concat(
                <div key={`searchgroup-${this.state.searchgroups.length}`}>
                    <hr></hr>
                    <DropdownButton
                        bsStyle="default"
                        title="Any Field"
                        key={`field-${this.state.searchgroups.length}`}
                        id={`field-${this.state.searchgroups.length}`}
                    >
                        <MenuItem eventKey="Any Field">Any Field</MenuItem>
                        <MenuItem eventKey="Title">Title</MenuItem>
                        <MenuItem eventKey="Abstract">Abstract</MenuItem>
                    </DropdownButton>
                    <DropdownButton
                        bsStyle="default"
                        title="Containing"
                        key={`containing-${this.state.searchgroups.length}`}
                        id={`containing-${this.state.searchgroups.length}`}
                    >
                        <MenuItem eventKey="Containing">Containing</MenuItem>
                        <MenuItem eventKey="Not Containing">Not Containing</MenuItem>
                    </DropdownButton>
                    <FormControl
                        type="text"
                        value={this.state.inputvalue}
                        placeholder="+ add word"
                        onChange={(e) => this.setState({ inputvalue: e.target.value })}
                        onKeyPress={this.addIncludeWord}
                    />
                    {this.props.searchwords.includeWords.length > 0 && <br></br>}
                    <ul style={{ "color": "#00994d" }}>
                        {this.props.searchwords.includeWords.map((word, idx) => {
                            return (
                                <li key={idx}>
                                    {word + "  "}
                                    <Glyphicon onClick={this.deleteSearchword.bind(this, word)} glyph="remove" />
                                </li>
                            );
                        })}
                    </ul>

                </div>
            )
        });
    }

    addIncludeWord(e) {
        if (e.charCode !== 13) return;
        let includes = this.props.searchwords.includeWords;
        if (includes.concat(this.props.searchwords.excludeWords).includes(e.target.value)) return;
        includes.push(e.target.value);
        this.setState({
            inputvalue: ''
        })
        this.props.updateSearchwords({
            includeWords: includes
        });
    }

    addExcludeWord(e) {
        if (e.charCode !== 13) return;
        let excludes = this.props.searchwords.excludeWords;
        if (excludes.concat(this.props.searchwords.includeWords).includes(e.target.value)) return;
        excludes.push(e.target.value);
        this.setState({
            excludevalue: ''
        })
        this.props.updateSearchwords({
            excludeWords: excludes
        });
    }

    deleteSearchword(word) {
        let includes = this.props.searchwords.includeWords;
        let excludes = this.props.searchwords.excludeWords;
        let index = includes.indexOf(word);
        if (index !== -1) includes.splice(index, 1);
        index = excludes.indexOf(word);
        if (index !== -1) excludes.splice(index, 1);
        this.props.updateSearchwords({
            includeWords: includes,
            excludeWords: excludes
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
                        <Panel.Title style={{ "color": "white" }}>Search</Panel.Title>
                    </Panel.Heading>
                </Panel.Toggle>
                <Panel.Collapse>
                    <Panel.Body>
                        <Button onClick={this.addSearchGroup.bind(this)}>
                            + add search group
                        </Button>
                        {this.state.searchgroups}
                    </Panel.Body>
                </Panel.Collapse>
            </Panel>
        );
    }
}

function mapStateToProps(state) {
    return {
        papers: state.papers,
        searchwords: state.searchwords
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        updateSearchwords: updateSearchwords,
        addCorpusAction: addCorpusAction
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FilterSearch);