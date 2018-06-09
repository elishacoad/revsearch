import { Button } from 'react-bootstrap';
import React from 'react'

const DecisionButtonGroup = (props) =>
    <div>
        {props.decisions.map((decision, i) => 
            <Button
                key={i}
                style={{ "backgroundColor": decision.buttoncolor }}
                className="decisionbutton"
                onClick={() => props.handleDecisionButtonClick(decision.decisionvalue)}
            >
                {decision.displayvalue}
            </Button>
        )}
    </div >

export default DecisionButtonGroup;