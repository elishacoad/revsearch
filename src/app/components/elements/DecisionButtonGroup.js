import { Button } from 'react-bootstrap';
import React from 'react';
import uuid from 'uuid';

const DecisionButtonGroup = props =>
    (
        <div>
            {props.options.map(option =>
                (
                    <Button
                        key={uuid.v1()}
                        style={{ backgroundColor: option.buttoncolor }}
                        className="decisionbutton"
                        onClick={() => props.handleDecisionButtonClick(option.decisionvalue)}
                    >
                        {option.displayvalue}
                    </Button>
                ))}
        </div>
    );

export default DecisionButtonGroup;
