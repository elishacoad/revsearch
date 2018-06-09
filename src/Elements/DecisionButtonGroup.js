import { Button } from 'react-bootstrap';
import React from 'react'

const DecisionButtonGroup = (props) =>
    <div>
        {props.decisions.map(decision => 
            <Button
                style={{ "backgroundColor": decision.buttoncolor }}
                className="decisionbutton"
                onClick={() => props.handleDecisionButtonClick(decision.clickvalue)}
            >
                {decision.displayword}
            </Button>
        )}
    </div >

export default DecisionButtonGroup;