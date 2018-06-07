/** Dropdown element wrapper around bootstrap dorwdown button
 *  receives a list of items for menuitems and maps those accordingly
 */

import {DropdownButton, MenuItem} from 'react-bootstrap';

import React from 'react';
import { logicalToDisplayName } from './constants';

export const DropdownElement = (props) => {
    // maps menu items options from items sent as list
    return (
        <DropdownButton
             bsStyle={props.bstyle}
             title={props.title}
             id={props.id}
             onSelect={props.onSelect}>

            {Object.keys(props.items).map((key, value) => 
                <MenuItem key={key} eventKey={key}>{logicalToDisplayName[key]}</MenuItem>)}

        </DropdownButton>
    )
}