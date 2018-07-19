import React from 'react';
import uuid from 'uuid';
import Button from './Button';

const DecisionButtonGroup = props =>
    (
        <div className="decision-buttons">
            {props.options.map(option => (
                <Button
                    key={uuid.v1()}
                    color={option.decisionValue}
                    onClick={() => props.handleDecisionButtonClick(option.decisionValue)}
                >
                    {option.displayValue}
                </Button>
            ))}
        </div>
    );

export default DecisionButtonGroup;
