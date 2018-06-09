import { DropdownButton, Glyphicon, MenuItem } from 'react-bootstrap';
import { PaperFields, SearchLogic } from '../../../../../../../Elements/constants';
import React, { Component } from 'react';
import { addSearchgroups, updateSearchgroups } from '../../../../../../../Actions';

import { FormElement } from '../../../../../../../Elements/FormElement';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'uuid';

class SearchGroup extends Component {
    constructor(props, context) {
        super(props, context);

        this.addSearchTerm = this.addSearchTerm.bind(this);
        this.state = {
            key: uuid.v1(),
            inputvalue: ""
        };
        this.props.addSearchgroups({
                key: this.state.key,
                field: PaperFields.ALL,
                logic: SearchLogic.CONTAINING,
                terms: []
            }
        );
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
        let searchgroup = this.props.searchgroups.find(group => group.key === this.props.searchgroup.key);
        searchgroup.terms = searchgroup.terms.concat(e.target.value);
        this.props.updateSearchgroups(searchgroup);
        this.setState({ inputvalue: '' });
    }

    deleteSearchTerm(word) {
        let searchgroup = this.props.searchgroups.find(group => group.key === this.props.searchgroup.key);
        searchgroup.terms = searchgroup.terms.filter(w => w !== word);
        this.props.updateSearchgroups(searchgroup);
        this.setState({ inputvalue: '' });
    }

    render() {
        let searchgroup = this.props.searchgroups.find(group => group.key === this.state.key);
        return (
            <div>
                <hr></hr>
                <DropdownButton
                    bsStyle="default"
                    title={this.logicalToDisplayName[searchgroup.field]}
                    id="searchgroup-field-select"
                    onSelect={choice => {
                        searchgroup.field = choice;
                        this.props.updateSearchgroups(searchgroup);
                    }}
                >
                    <MenuItem eventKey={PaperFields.ALL}>Any Field</MenuItem>
                    <MenuItem eventKey={PaperFields.TITLE}>Title</MenuItem>
                    <MenuItem eventKey={PaperFields.ABSTRACT}>Abstract</MenuItem>
                </DropdownButton>
                <DropdownButton
                    bsStyle="default"
                    title={this.logicalToDisplayName[searchgroup.logic]}
                    id="searchgroup-logic-select"
                    onSelect={choice => {
                        searchgroup.logic = choice;
                        this.props.updateSearchgroups(searchgroup);
                    }}
                >
                    <MenuItem eventKey={SearchLogic.CONTAINING}>Containing</MenuItem>
                    <MenuItem eventKey={SearchLogic.NOTCONTAINING}>Not Containing</MenuItem>
                </DropdownButton>
                <FormElement
                    type="text"
                    value={this.state.inputvalue}
                    placeholder="+ add word"
                    onChange={(e) => this.setState({ inputvalue: e.target.value })}
                    onKeyPress={this.addSearchTerm}
                />
                {searchgroup.terms.length > 0 && <br></br>}
                <ul style={searchgroup.logic === SearchLogic.CONTAINING ?
                    { "color": "#00994d" } : { "color": "#990000" }}>
                    {searchgroup.terms.map((word, i) => {
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