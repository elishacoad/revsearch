import { Button, Panel } from 'react-bootstrap';
import React, { Component } from 'react';

import { Colors } from '../../../../../Elements/constants';
import SearchGroup from './Components/SearchGroup';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateSearchgroups } from '../../../../../Actions';
import uuid from 'uuid';

class FilterSearch extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
            searchgroups: []
        };
    }

    addSearchGroup() {
        this.setState({ searchgroups: this.state.searchgroups.concat( <SearchGroup key={uuid.v1()} /> )});
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

function mapStateToProps(state) {
    return {
        searchgroups: state.searchgroups
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        updateSearchgroups: updateSearchgroups,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FilterSearch);