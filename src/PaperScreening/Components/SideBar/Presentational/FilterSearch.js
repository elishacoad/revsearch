import { Button, Panel } from 'react-bootstrap';

import { Colors } from '../../../../Elements/constants';
import { Glyphicon } from 'react-bootstrap';
import React from 'react'
import Searches from '../Containers/Searches';

export const FilterSearch = (props) => {
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
                    <Button onClick={props.onClick} className="btn btn-default btn-block">
                        <Glyphicon glyph="search" /> New search
                     </Button>
                    <Searches
                        updateSearchGroup={props.updateSearchGroup}
                        searchGroupsList={props.searchGroups}
                        allTerms={props.allTerms}
                    />
                </Panel.Body>
            </Panel.Collapse>
        </Panel>
    )
}