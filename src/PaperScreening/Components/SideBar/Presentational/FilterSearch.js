import React from 'react'
import { Button, Panel } from 'react-bootstrap';
import { Colors } from '../../../../Constants';
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
                    <Button onClick={props.onClick}>
                        + new search
                     </Button>
                    <Searches
                        updateSearchGroup={props.updateSearchGroup}
                        searchGroupsList={props.searchGroups}
                    />
                </Panel.Body>
            </Panel.Collapse>
        </Panel>
    )
}

// searchGroupsList={
//     [{
//         key: "123",
//         field: PaperFields.ALL,
//         logic: SearchLogic.CONTAINING,
//         terms: []
//     }]}