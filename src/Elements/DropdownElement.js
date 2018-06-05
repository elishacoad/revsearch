import React from 'react'
import {DropdownButton, MenuItem} from 'react-bootstrap';
import { logicalNameToDisplayName } from './helper'

export const DropdownElement = (props) => {
    return (
        <DropdownButton
             bsStyle={props.bstyle}
             title={props.title}
             id={props.id}
             onSelect={props.onSelect}>

            {Object.keys(props.items).map((key, value) => 
                <MenuItem key={key} eventKey={key}>{logicalNameToDisplayName[key]}</MenuItem>)}

        </DropdownButton>
    )
}