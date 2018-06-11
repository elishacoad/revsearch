import React from 'react'
import { Button } from 'react-bootstrap';

const DecisionButtonGroup = (props) =>
    <div>
        {props.options.map((option, i) => 
            <Button
                key={i}
                style={{ "backgroundColor": option.buttoncolor }}
                className="decisionbutton"
                onClick={() => props.handleDecisionButtonClick(option.decisionvalue)}
            >
                {option.displayvalue}
            </Button>
        )}
    </div >

export default DecisionButtonGroup;