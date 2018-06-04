import { DropdownButton, FormControl, Glyphicon, MenuItem } from 'react-bootstrap';
import { PaperFields, SearchLogic } from '../../../../../../../Constants';
import React, { Component } from 'react';
import { addSearchgroups, updateSearchgroups } from '../../../../../../../Actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'uuid';

class SearchGroup extends Component {
    constructor(props, context) {
        super(props, context);

        this.addSearchTerm = this.addSearchTerm.bind(this);
        this.state = {
            searchgroup: {
                key: uuid.v1(),
                field: PaperFields.ALL,
                logic: SearchLogic.CONTAINING,
                terms: []
            },
            inputvalue: ""
        };
        this.props.addSearchgroups(this.state.searchgroup);
    }

    logicalToDisplayName = {
        [PaperFields.ALL]: "Any Field",
        [PaperFields.TITLE]: "Title",
        [PaperFields.ABSTRACT]: "Abstract",
        [SearchLogic.CONTAINING]: "Containing",
        [SearchLogic.NOTCONTAINING]: "Not Containing"
    }

    addSearchTerm(e) {
        if (e.charCode !== 13) return;
        // let existingTerms = this.props.searchgroups.find(group => group.key === this.props.searchgroup.key).terms;
        this.setState({
            searchgroup: { ...this.state.searchgroup, terms: this.state.searchgroup.terms.concat(e.target.value) },
            inputvalue: ''
        });
        this.props.updateSearchgroups(this.state.searchgroup);
    }

    deleteSearchTerm(word) {
        this.setState({
            searchgroup: { ...this.state.searchgroup, terms: this.state.searchgroup.terms.filter(w => w !== word) },
            inputvalue: ''
        });
        this.props.updateSearchgroups(this.state.searchgroup);
    }

    render() {
        return (
            <div>
                <hr></hr>
                <DropdownButton
                    bsStyle="default"
                    title={this.logicalToDisplayName[this.state.searchgroup.field]}
                    id="searchgroup-field-select"
                    onSelect={choice => {
                        this.setState({ searchgroup: { ...this.state.searchgroup, field: choice } });
                        this.props.updateSearchgroups(this.state.searchgroup);
                    }}
                >
                    <MenuItem eventKey={PaperFields.ALL}>Any Field</MenuItem>
                    <MenuItem eventKey={PaperFields.TITLE}>Title</MenuItem>
                    <MenuItem eventKey={PaperFields.ABSTRACT}>Abstract</MenuItem>
                </DropdownButton>
                <DropdownButton
                    bsStyle="default"
                    title={this.logicalToDisplayName[this.state.searchgroup.logic]}
                    id="searchgroup-logic-select"
                    onSelect={choice => {
                        this.setState({ searchgroup: { ...this.state.searchgroup, logic: choice } });
                        this.props.updateSearchgroups(this.state.searchgroup);
                    }}
                >
                    <MenuItem eventKey={SearchLogic.CONTAINING}>Containing</MenuItem>
                    <MenuItem eventKey={SearchLogic.NOTCONTAINING}>Not Containing</MenuItem>
                </DropdownButton>
                <FormControl
                    type="text"
                    value={this.state.inputvalue}
                    placeholder="+ add word"
                    onChange={(e) => this.setState({ inputvalue: e.target.value })}
                    onKeyPress={this.addSearchTerm}
                />
                {this.state.searchgroup.terms.length > 0 && <br></br>}
                <ul style={this.state.searchgroup.logic === SearchLogic.CONTAINING ?
                    { "color": "#00994d" } : { "color": "#990000" }}>
                    {this.state.searchgroup.terms.map((word, i) => {
                        return (
                            <li key={i}>
                                {word + "  "}
                                <Glyphicon onClick={this.deleteSearchTerm.bind(this, word)} glyph="remove" />
                            </li>
                        );
                    })}
                </ul>
            </div >
        );
    }
}

function mapStateToProps(state) {
    return {
        searchgroups: state.searchgroups
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addSearchgroups: addSearchgroups,
        updateSearchgroups: updateSearchgroups,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchGroup);