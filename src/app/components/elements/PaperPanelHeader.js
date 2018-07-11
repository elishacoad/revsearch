import React from 'react';

const PaperPanelHeader = props => (
    <div className={`paper-panel-header ${props.color}`}>
        <div className="title">
            {props.paperTitle}
        </div>
    </div>
);

export default PaperPanelHeader;
