import { DropdownButton, FormControl, Glyphicon, MenuItem } from 'react-bootstrap';
import { PaperFields, SearchLogic } from '../../../../../../../Constants';
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateSearchwords } from '../../../../../../../Actions';

class SearchGroup extends Component {
    constructor(props, context) {
        super(props, context);

        this.addSearchTerm = this.addSearchTerm.bind(this);
        this.state = {
            inputvalue: ""
        };
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
        this.setState({
            terms: this.props.searchwords[this.props.idx].terms.concat(e.target.value),
            inputvalue: ''
        });
        this.props.updateSearchwords(
            this.props.searchwords.concat({
                term: e.target.value,
                field: this.props.searchwords[this.props.idx].field,
                logic: this.props.searchwords[this.props.idx].logic
            })
        );
    }

    deleteSearchTerm(word) {
        this.setState({ terms: this.props.searchwords[this.props.idx].terms.filter(w => w !== word) });
        this.props.updateSearchwords(this.props.searchwords.filter(o => o.term !== word));
    }

    render() {
        return (
            <div>
                <hr></hr>
                <DropdownButton
                    bsStyle="default"
                    title={this.logicalToDisplayName[this.props.searchwords[this.props.idx].field]}
                    id="searchgroup-field-select"
                    onSelect={(choice) => this.setState({ field: choice })}
                >
                    <MenuItem eventKey={PaperFields.ALL}>Any Field</MenuItem>
                    <MenuItem eventKey={PaperFields.TITLE}>Title</MenuItem>
                    <MenuItem eventKey={PaperFields.ABSTRACT}>Abstract</MenuItem>
                </DropdownButton>
                <DropdownButton
                    bsStyle="default"
                    title={this.logicalToDisplayName[this.props.searchwords[this.props.idx].logic]}
                    id="searchgroup-logic-select"
                    onSelect={(choice) => {
                        let searchwords = this.props.searchwords;
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
                {this.props.searchwords[this.props.idx].terms.length > 0 && <br></br>}
                <ul style={this.props.searchwords[this.props.idx].logic === SearchLogic.CONTAINING ?
                    { "color": "#00994d" } : { "color": "#990000" }}>
                    {this.props.searchwords[this.props.idx].terms.map((word, i) => {
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
        searchwords: state.searchwords
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        updateSearchwords: updateSearchwords,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchGroup);