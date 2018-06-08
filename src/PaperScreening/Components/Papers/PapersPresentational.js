import { PanelGroup } from 'react-bootstrap';
import PaperPanelPresentational from './PaperPanelPresentational';
import React from 'react';

const PapersPresentational = (props) => {
    return (
        <PanelGroup
            accordion
            activeKey={props.activeRowIndex}
            onSelect={props.selectRow}
            id="papers-accordion-uncontrolled"
            className="Papers"
        >
            {props.paperItems.map((paperItem, i) =>
                <PaperPanelPresentational key={i} eventKey={i} paper={paperItem} />
            )}
        </PanelGroup>
    );
}

export default PapersPresentational;