import { Button } from 'react-bootstrap';
import React from 'react'

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