import {DropdownButton, MenuItem} from 'react-bootstrap';

import React from 'react'
import { logicalToDisplayName } from './constants'

export const DropdownElement = (props) => {
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