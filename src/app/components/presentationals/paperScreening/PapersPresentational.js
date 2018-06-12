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
        {props.paperItems.map((paperItem, i) => (
            <PaperPanelPresentational
                key={uuid.v1()}
                eventKey={i}
                paper={paperItem}
            />
        ))}
    </PanelGroup>
);

export default PapersPresentational;
