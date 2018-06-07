/** This is the panel that will contain the paper title,
 *  and paper body, etc. The buttons will be displayed in the 
 *  the body.
 */

import React, { Component } from 'react';

import { Colors } from '../../../Elements/constants';
import { Panel } from 'react-bootstrap';
import PaperBody from '../PaperBody/PaperBody';

class PaperPresentational extends Component {
    render() {
        return (
            <Panel
                eventKey={this.props.eventKey}
                style={{ "borderColor": Colors["DARK" + this.props.paper.decision.toUpperCase()] }}
                key={this.props.paper.id}
            >
                    <Panel.Heading
                        style={{ "backgroundColor": Colors[this.props.paper.decision.toUpperCase()] }}
                    >
                        <Panel.Title toggle>{this.props.paper.title}</Panel.Title>
                    </Panel.Heading>
                <Panel.Collapse>
                    <Panel.Body>
                        <PaperBody paper={this.props.paper} />
                    </Panel.Body>
                </Panel.Collapse>
            </Panel>
        );
    }
}

export default PaperPresentational;