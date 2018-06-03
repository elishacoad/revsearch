import { Button, DropdownButton, FormControl, Glyphicon, MenuItem, Panel } from 'react-bootstrap';
import React, { Component } from 'react';
import { addCorpusAction, updateSearchwords } from '../../../../../Actions';

import { Colors } from '../../../../../Constants';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class FilterSearch extends Component {
    constructor(props, context) {
        super(props, context);

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
                    onKeyPress={this.addSearchTerm.bind(this, idx)}
                />
                {this.props.searchwords.includeWords.length > 0 && <br></br>}
                <ul style={{ "color": "#00994d" }}>
                    {this.props.searchwords.includeWords.map((word, i) => {
                        return (
                            <li key={i}>
                                {word + "  "}
                                <Glyphicon onClick={this.deleteSearchTerm.bind(this, idx, word)} glyph="remove" />
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

    deleteSearchTerm(idx, word) {
        let searchgroups = this.state.searchgroups;
        let index = searchgroups[idx].terms.indexOf(word);
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
                        {this.state.searchgroups.map((group, idx) => {
                            return this.makeSearchGroup.bind(this, idx);
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