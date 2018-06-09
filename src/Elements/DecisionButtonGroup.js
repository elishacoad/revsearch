import { Colors, Decision } from './constants'

import { Button } from 'react-bootstrap';
import React from 'react'

const DecisionButtonGroup = (props) =>
    <div>
        <Button
            style={{ "backgroundColor": Colors.INCLUDE }}
            className="decisionbutton"
            onClick={() => props.handleDecisionButtonClick(Decision.INCLUDE)}
        >
            Include
        </Button>
        <Button
            style={{ "backgroundColor": Colors.MAYBE }}
            className="decisionbutton"
            onClick={() => props.handleDecisionButtonClick(Decision.MAYBE)}
        >
            Maybe
        </Button>
        <Button
            style={{ "backgroundColor": Colors.EXCLUDE }}
            className="decisionbutton"
            onClick={() => props.handleDecisionButtonClick(Decision.EXCLUDE)}
        >
            Exclude
        </Button>
    </div >

export default DecisionButtonGroup;