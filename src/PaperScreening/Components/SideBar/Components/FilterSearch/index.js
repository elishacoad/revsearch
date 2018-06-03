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
            searchgroups: []
        };
    }

    addSearchGroup() {
        this.setState({
            searchgroups: this.state.searchgroups.concat(
                {
                    field: "Any Field",
                    logic: "Containing",
                    inputvalue: "",
                    terms: []
                }
            )
        });
        console.log(this.state.searchgroups);
    }

    handleChange(e) {
        console.log("handleChange called!")
        console.log(e);
    }

    makeSearchGroup(idx) {
        return (
            <div key={idx}>
                <hr></hr>
                <DropdownButton
                    bsStyle="default"
                    title={this.state.searchgroups[idx].title}
                >
                    <MenuItem eventKey="Any Field"></MenuItem>
                    <MenuItem eventKey="Title">Title</MenuItem>
                    <MenuItem eventKey="Abstract">Abstract</MenuItem>
                </DropdownButton>
                <DropdownButton
                    bsStyle="default"
                    title={this.state.searchgroups[idx].logic}
                >
                    <MenuItem eventKey="Containing">Containing</MenuItem>
                    <MenuItem eventKey="Not Containing">Not Containing</MenuItem>
                </DropdownButton>
                <FormControl
                    type="text"
                    value={this.state.searchgroups[idx].inputvalue}
                    placeholder="+ add word"
                    onChange={(e) => this.setState({ inputvalue: e.target.value })}
                    onKeyPress={this.state.searchgroups[idx].logic === "Containing" ?
                        this.addIncludeWord(event, this.state.searchgroups[idx]) :
                        this.addExcludeWord(event, this.state.searchgroups[idx])
                    }
                />
                {this.props.searchwords.includeWords.length > 0 && <br></br>}
                <ul style={{ "color": "#00994d" }}>
                    {this.props.searchwords.includeWords.map((word, i) => {
                        return (
                            <li key={i}>
                                {word + "  "}
                                <Glyphicon onClick={this.deleteSearchword.bind(this, word)} glyph="remove" />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    addIncludeWord(e, group) {
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

    makeSearchGroup(idx) {
        return (
            <div key={idx}>
                <hr></hr>
                <DropdownButton
                    bsStyle="default"
                    title={this.state.searchgroups[idx].title}
                >
                    <MenuItem eventKey="Any Field"></MenuItem>
                    <MenuItem eventKey="Title">Title</MenuItem>
                    <MenuItem eventKey="Abstract">Abstract</MenuItem>
                </DropdownButton>
                <DropdownButton
                    bsStyle="default"
                    title={this.state.searchgroups[idx].logic}
                >
                    <MenuItem eventKey="Containing">Containing</MenuItem>
                    <MenuItem eventKey="Not Containing">Not Containing</MenuItem>
                </DropdownButton>
                <FormControl
                    type="text"
                    value={this.state.searchgroups[idx].inputvalue}
                    placeholder="+ add word"
                    onChange={(e) => {
                        let searchgroups = this.state.searchgroups;
                        searchgroups[idx].value = e.value;
                        this.setState({ searchgroups: searchgroups });
                        }
                    }
                    onKeyPress={this.addSearchTerm.bind(this, idx)}
                />
                {this.state.searchgroups[idx].terms.length > 0 && <br></br>}
                <ul style={{ "color": "#00994d" }}>
                    {this.state.searchgroups[idx].map((word, i) => {
                        return (
                            <li key={i}>
                                {word + "  "}
                                <Glyphicon onClick={this.deleteSearchTerm.bind(this, idx)} glyph="remove" />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    addSearchTerm(e, idx) {
        if (e.charCode !== 13) return;
        let searchgroups = this.state.searchgroups;
        searchgroups[idx].terms.push(e.target.value);
        searchgroups[idx].inputvalue = '';
        this.setState({
            searchgroups: searchgroups
        })
    }

    deleteSearchTerm(idx) {
        let searchgroups = this.state.searchgroups;
        let index = excludes.indexOf(searchgroups[idx].terms);
        if (index !== -1) searchgroups[idx].terms.splice(index, 1);
        this.setState({
            searchgroups: searchgroups
        })        
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
                        <Button onClick={this.addSearchGroup.bind(this, this.state.searchgroups.length)}>
                            + add search group
                        </Button>
                        {this.state.searchgroups.map(group => {
                            return this.makeSearchGroup.bind(this, group);
                        })}
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