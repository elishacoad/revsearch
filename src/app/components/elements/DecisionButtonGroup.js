import React from 'react';
import uuid from 'uuid';
import Button from './Button';

const DecisionButtonGroup = props =>
    (
        <div>
            {props.options.map(option => (
                <Button
                    key={uuid.v1()}
                    color={option.buttonColor}
                    content={option.displayValue}
                    onClick={() => props.handleDecisionButtonClick(option.decisionValue)}
                />
            ))}
        </div>
    );

export default DecisionButtonGroup;
