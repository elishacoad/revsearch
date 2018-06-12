/** Form element wrapper around bootstrap form control */
import React from 'react';
import { FormControl } from 'react-bootstrap';

const FormElement = props =>
    (
        <FormControl
            className="add-word-form"
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onKeyPress={props.onKeyPress}
        />
    );

export default FormElement;
