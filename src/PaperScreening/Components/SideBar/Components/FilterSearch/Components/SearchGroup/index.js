import { DropdownButton, FormControl, Glyphicon, MenuItem } from 'react-bootstrap';
import React, { Component } from 'react';

class SearchGroup extends Component {
    constructor(props, context) {
        super(props, context);

        this.addSearchTerm = this.addSearchTerm.bind(this);

        this.state = {
            field: "Any Field",
            logic: "Containing",
            inputvalue: "",
            terms: []
        };
    }

    addSearchTerm(e) {
        if (e.charCode !== 13) return;
        this.setState({
            terms: this.state.terms.concat(e.target.value),
            inputvalue: ''
        });
    }

    deleteSearchTerm(word) {
        this.setState({ terms: this.state.terms.filter(e => e !== word) });
    }

    render() {
        return (
            <div>
                <hr></hr>
                <DropdownButton
                    bsStyle="default"
                    title={this.state.field}
                    id="searchgroup-field-select"
                    onSelect={(e) => this.setState({field : e})}
                >
                    <MenuItem eventKey="Any Field"></MenuItem>
                    <MenuItem eventKey="Title">Title</MenuItem>
                    <MenuItem eventKey="Abstract">Abstract</MenuItem>
                </DropdownButton>
                <DropdownButton
                    bsStyle="default"
                    title={this.state.logic}
                    id="searchgroup-logic-select"
                    onSelect={(e) => this.setState({logic : e})}
                >
                    <MenuItem eventKey="Containing">Containing</MenuItem>
                    <MenuItem eventKey="Not Containing">Not Containing</MenuItem>
                </DropdownButton>
                <FormControl
                    type="text"
                    value={this.state.inputvalue}
                    placeholder="+ add word"
                    onChange={(e) => this.setState({ inputvalue: e.target.value })}
                    onKeyPress={this.addSearchTerm}
                />
                {this.state.terms.length > 0 && <br></br>}
                <ul style={this.state.logic === "Containing" ? 
                    { "color": "#00994d" } : { "color": "#990000" }}>
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

export default SearchGroup;