import React from 'react';
import uuid from 'uuid';

const DecisionButtonGroup = props =>
    (
        <div>
            {props.options.map(option => (
                <button
                    key={uuid.v1()}
                    className={`rev-button enabled ${option.buttonColor}`}
                    onClick={() => props.handleDecisionButtonClick(option.decisionValue)}
                >
                    {option.displayValue}
                </button>
            ))}
        </div>
    );

export default DecisionButtonGroup;
