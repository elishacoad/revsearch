import React from 'react';
import { PanelGroup } from 'react-bootstrap';
import uuid from 'uuid';

import PaperPanelPresentational from '../../presentationals/paperScreening/PaperPanelPresentational';

const PapersPresentational = props => (
    <PanelGroup
        accordion
        activeKey={props.activeRowIndex}
        onSelect={props.selectRow}
        id="papers-accordion-uncontrolled"
        className="Papers"
    >
        {props.paperItems.map(paperItem => (
            <PaperPanelPresentational key={uuid.v1()} eventKey={uuid.v1()} paper={paperItem} />
        ))}
    </PanelGroup>
);

export default PapersPresentational;
