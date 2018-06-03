import { Button, Panel } from 'react-bootstrap';
import React, { Component } from 'react';

import { Colors } from '../../../../../Constants';
import SearchGroup from './Components/SearchGroup';

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
            searchgroups:
                this.state.searchgroups.concat(
                    <SearchGroup key={this.state.searchgroups.length} />
                )
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
                        <Button onClick={this.addSearchGroup.bind(this, this.state.searchgroups.length)}>
                            + new search
                        </Button>
                        {this.state.searchgroups}
                    </Panel.Body>
                </Panel.Collapse>
            </Panel>
        );
    }
}

export default FilterSearch;