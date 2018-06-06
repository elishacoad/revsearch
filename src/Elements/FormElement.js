import React from 'react'
import {FormControl} from 'react-bootstrap';

export const FormElement = (props) => {
    return (
        <FormControl className="add-word-form"
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onKeyPress={props.onKeyPress}/>)
}