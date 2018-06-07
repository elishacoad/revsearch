import React, { Component } from 'react';

import { PanelGroup } from 'react-bootstrap';
import PaperPanelPresentational from './PaperPanelPresentational';

class PapersPresentational extends Component {
    render() {
        return (
            <PanelGroup
                accordion
                activeKey={this.props.activeRowIndex}
                onSelect={this.props.selectRow}
                id="papers-accordion-uncontrolled"
                className="Papers"
            >
                {this.props.paperItems.map((paperItem, i) => <PaperPanelPresentational key={i} eventKey={i} paper={paperItem} />)}
            </PanelGroup>
        );
    }
}


export default PapersPresentational;