import { Button } from 'react-bootstrap';
import React from 'react';
import uuid from 'uuid';

const DecisionButtonGroup = props =>
    (
        <div>
            {props.options.map(option => (
                <Button
                    key={uuid.v1()}
                    style={{ backgroundColor: option.buttonColor }}
                    className="decisionbutton"
                    onClick={() => props.handleDecisionButtonClick(option.decisionValue)}
                >
                    {option.displayValue}
                </Button>
            ))}
        </div>
    );

export default DecisionButtonGroup;
