import React from 'react';
import uuid from 'uuid';
import Button from './Button';

const DecisionButtonGroup = props =>
    (
        <div className="decision-buttons">
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
