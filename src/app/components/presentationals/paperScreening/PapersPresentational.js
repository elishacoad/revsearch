import React from 'react';
import { PanelGroup } from 'react-bootstrap';

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
                // to get the accordian effect, we have to use key=index
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                eventKey={i}
                paper={paperItem}
            />
        ))}
    </PanelGroup>
);

export default PapersPresentational;
