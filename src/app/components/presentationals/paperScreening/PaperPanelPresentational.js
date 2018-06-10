/** A paper panel is the clickable banner that opens the paper body.
 * The color of the panel is decided by what the decision for the paper is.
 */

import { Colors } from '../../Elements/constants';
import { Panel } from 'react-bootstrap';
import PaperBody from '../Containers/PaperBody';
import React from 'react';

const PaperPanelPresentational = (props) => {
    return (
        <Panel
            eventKey={props.eventKey}
            style={{ "borderColor": Colors["DARK" + props.paper.decision.toUpperCase()] }}
            key={props.paper.id}
        >
            <Panel.Heading
                style={{ "backgroundColor": Colors[props.paper.decision.toUpperCase()] }}
            >
                <Panel.Title toggle>{props.paper.title}</Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
                <Panel.Body>
                    <PaperBody paper={props.paper} />
                </Panel.Body>
            </Panel.Collapse>
        </Panel>
    );
}

export default PaperPanelPresentational;