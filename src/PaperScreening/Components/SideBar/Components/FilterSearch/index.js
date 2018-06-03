import { Button, Panel } from 'react-bootstrap';
import { PaperFields, SearchLogic } from '../../../../../Constants';
import React, { Component } from 'react';

import { Colors } from '../../../../../Constants';
import SearchGroup from './Components/SearchGroup';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateSearchwords } from '../../../../../Actions';
import uuid from 'uuid';

class FilterSearch extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
            searchgroups: {}
        };
    }

    addSearchGroup() {
        let searchgroups = this.state.searchgroups;
        searchgroups[uuid.v1()] = {
            field: PaperFields.ALL,
            logic: SearchLogic.CONTAINING,
            terms: []
        }
        this.setState({ searchgroups: searchgroups });
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
                        {Object.keys(this.state.searchgroups).map(uuid => <SearchGroup key={uuid} uuid={uuid}/>)}
                    </Panel.Body>
                </Panel.Collapse>
            </Panel>
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

export default connect(mapStateToProps, matchDispatchToProps)(FilterSearch);