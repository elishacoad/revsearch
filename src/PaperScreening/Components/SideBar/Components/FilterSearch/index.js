import { Checkbox, DropdownButton, FormControl, Glyphicon, MenuItem, Panel } from 'react-bootstrap';
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
            includevalue: '',
            excludevalue: ''
        };
    }

    addIncludeWord(e) {
        if (e.charCode !== 13) return;
        let includes = this.props.searchwords.includeWords;
        if (includes.concat(this.props.searchwords.excludeWords).includes(e.target.value)) return;
        includes.push(e.target.value);
        this.setState({
            includevalue: ''
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
                        <FormControl
                            type="text"
                            value={this.state.includevalue}
                            placeholder="+ add include word"
                            onChange={(e) => this.setState({ includevalue: e.target.value })}
                            onKeyPress={this.addIncludeWord}
                        />
                        {this.props.searchwords.includeWords.length > 0 && <br></br>}
                        <ul style={{ "color": "#00994d" }}>
                            {this.props.searchwords.includeWords.map((word, idx) => {
                                return (
                                    <li key={idx}>
                                        <DropdownButton
                                            bsStyle="default"
                                            title="Section"
                                            key={idx}
                                            id={`dropdown-basic-${idx}`}
                                        >
                                            <MenuItem eventKey="title"><Checkbox>Title</Checkbox></MenuItem>
                                            <MenuItem eventKey="abstract"><Checkbox>Abstract</Checkbox></MenuItem>
                                            <MenuItem eventKey="..." active><Checkbox>...</Checkbox></MenuItem>
                                        </DropdownButton>
                                        {"  " + word + "  "}
                                        <Glyphicon onClick={this.deleteSearchword.bind(this, word)} glyph="remove" />
                                    </li>
                                );
                            })}
                        </ul>
                        <hr></hr>
                        <DropdownButton
                            bsStyle="default"
                            title="Section"
                            id={`dropdown-basic`}
                        >
                            <MenuItem eventKey="title">
                                <Checkbox>Title</Checkbox>
                            </MenuItem>
                            <MenuItem eventKey="abstract">
                                <Checkbox>Abstract</Checkbox>
                            </MenuItem>
                            <MenuItem eventKey="..." active>
                                <Checkbox>...</Checkbox>
                            </MenuItem>
                        </DropdownButton>

                        <FormControl
                            type="text"
                            value={this.state.excludevalue}
                            placeholder="+ add exclude word"
                            onChange={(e) => this.setState({ excludevalue: e.target.value })}
                            onKeyPress={this.addExcludeWord}
                        />
                        {this.props.searchwords.excludeWords.length > 0 && <br></br>}
                        <ul style={{ "color": "#990000" }}>
                            {this.props.searchwords.excludeWords.map((word, idx) => {
                                return (
                                    <li key={idx}>
                                        {/* <DropdownButton
                                            bsStyle="default"
                                            title="Section"
                                            key={idx}
                                            id={`dropdown-basic-${idx}`}
                                        >
                                            <MenuItem eventKey="title">
                                                <Checkbox>Title</Checkbox>
                                            </MenuItem>
                                            <MenuItem eventKey="abstract">
                                                <Checkbox>Abstract</Checkbox>
                                            </MenuItem>
                                            <MenuItem eventKey="..." active>
                                                <Checkbox>...</Checkbox>
                                            </MenuItem>
                                        </DropdownButton> */}
                                        {word + "  "}
                                        <Glyphicon onClick={this.deleteSearchword.bind(this, word)} glyph="remove" />
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