/** Presentational component for filtering papers, has UI elements for the 
 *  search tab and renders the Searchgroups component to make and update
 *  new searches
 */

import React from 'react'
import { Button, Panel } from 'react-bootstrap';
import SearchGroups from '../Containers/SearchGroups';
import { Glyphicon } from 'react-bootstrap';

export const FilterPresentational = (props) => {
    return (
        <Panel id="accordion-example" style={{ "borderColor": "gray" }}>
            <Panel.Toggle>
                <Panel.Heading className='background-revnavy cursor-pointer'>
                    <Panel.Title style={{ "color": "white" }}>Search</Panel.Title>
                </Panel.Heading>
            </Panel.Toggle>
            <Panel.Collapse>
                <Panel.Body>
                    <Button onClick={props.onClick} className="btn btn-default btn-block">
                        <Glyphicon glyph="search" /> New search
                     </Button>
                    <SearchGroups
                        updateSearchGroup={props.updateSearchGroup}
                        searchGroupsList={props.searchGroups}
                        allTerms={props.allTerms}
                    />
                </Panel.Body>
            </Panel.Collapse>
        </Panel>
    )
}