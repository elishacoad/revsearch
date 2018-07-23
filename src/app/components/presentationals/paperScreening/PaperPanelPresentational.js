import React from 'react';
import { Panel } from 'react-bootstrap';

import PaperBody from 'Containers/paperScreening/PaperBody';
import { PaperPanelHeader } from 'Elements';

/** A paper panel is the clickable banner that opens the paper body.
 * The color of the panel is decided by what the decision for the paper is.
 */

const PaperPanelPresentational = props => (
    <Panel
        className={`paper-panel border-dark ${props.paper.decision}`}
        eventKey={props.eventKey}
        key={props.paper.id}
    >
        <Panel.Toggle>
            <Panel.Heading
                componentClass={PaperPanelHeader}
                color={props.paper.decision}
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
