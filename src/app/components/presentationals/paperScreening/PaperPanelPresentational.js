import React from 'react';
import { Panel } from 'react-bootstrap';

import PaperBody from 'Containers/paperScreening/PaperBody';
import { Colors } from 'Constants';
import { PaperPanelHeader } from 'Elements';

/** A paper panel is the clickable banner that opens the paper body.
 * The color of the panel is decided by what the decision for the paper is.
 */

const PaperPanelPresentational = props => (
    <Panel
        eventKey={props.eventKey}
        style={{ borderColor: Colors[`DARK${props.paper.decision.toUpperCase()}`] }}
        key={props.paper.id}
    >
        <Panel.Toggle>
            <Panel.Heading
                componentClass={PaperPanelHeader}
                color={Colors[props.paper.decision.toUpperCase()]}
                paperTitle={props.paper.title}
            />
        </Panel.Toggle>
        <Panel.Collapse>
            <Panel.Body>
                <PaperBody paper={props.paper} />
            </Panel.Body>
        </Panel.Collapse>
    </Panel>
);

export default PaperPanelPresentational;
