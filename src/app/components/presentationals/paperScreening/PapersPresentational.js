import React from 'react';
import { PanelGroup } from 'react-bootstrap';

import PaperPanelPresentational from '../../presentationals/paperScreening/PaperPanelPresentational';

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