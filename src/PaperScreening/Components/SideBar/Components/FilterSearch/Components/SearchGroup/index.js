import { DropdownButton, FormControl, Glyphicon, MenuItem } from 'react-bootstrap';
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SearchGroup extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            field: "Any Field",
            logic: "Containing",
            inputvalue: "",
            terms: []
        };
    }

    addSearchTerm(e) {
        if (e.charCode !== 13) return;
        let terms = this.state.terms;
        terms.push(e.target.value);
        this.setState({ 
            terms: terms,
            inputvalue: ''
         });
    }

    deleteSearchTerm(word) {
        let terms = this.state.terms;
        let index = terms.indexOf(word);
        if (index !== -1) terms.splice(index, 1);
        this.setState({ terms: terms });
    }

    render() {
        return (
            <div>
                <hr></hr>
                <DropdownButton
                    bsStyle="default"
                    title={this.state.title}
                >
                    <MenuItem eventKey="Any Field"></MenuItem>
                    <MenuItem eventKey="Title">Title</MenuItem>
                    <MenuItem eventKey="Abstract">Abstract</MenuItem>
                </DropdownButton>
                <DropdownButton
                    bsStyle="default"
                    title={this.state.logic}
                >
                    <MenuItem eventKey="Containing">Containing</MenuItem>
                    <MenuItem eventKey="Not Containing">Not Containing</MenuItem>
                </DropdownButton>
                <FormControl
                    type="text"
                    value={this.state.inputvalue}
                    placeholder="+ add word"
                    onChange={(e) => this.setState({ inputvalue: e.target.value })}
                    onKeyPress={(e) => this.addSearchTerm.bind(this, e)}
                />
                {this.state.terms.length > 0 && <br></br>}
                <ul style={{ "color": "#00994d" }}>
                    {this.state.terms.map((word, i) => {
                        return (
                            <li key={i}>
                                {word + "  "}
                                <Glyphicon onClick={this.deleteSearchTerm.bind(this, word)} glyph="remove" />
                            </li>
                        );
                    })}
                </ul>
            </div>
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
    return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchGroup);