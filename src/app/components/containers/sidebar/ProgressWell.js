import React from 'react';
import { connect } from 'react-redux';
import { Badge, Panel, ProgressBar } from 'react-bootstrap';
import { Colors } from '../../../globals/constants';
import { tallyDecisions, percent } from '../../../globals/helpers';

const ProgressWell = (props) => {
    const counts = tallyDecisions(props.papers);
    const pincluded = Math.round(percent(counts.includes, props.papers.length));
    const pexcluded = Math.round(percent(counts.excludes, props.papers.length));

    return (
        <Panel style={{ borderColor: 'gray' }}>
            <Panel.Toggle>
                <Panel.Heading
                    style={{
                        backgroundColor: Colors.REVNAVY,
                        cursor: 'pointer',
                    }}
                >
                    <Panel.Title style={{ color: 'white' }}>
                        {'Progress  '}
                        <Badge>
                            {counts.excludes + counts.includes} / {props.papers.length}
                        </Badge>
                    </Panel.Title>
                </Panel.Heading>
            </Panel.Toggle>
            <Panel.Collapse>
                <Panel.Body>
                    <ProgressBar now={pincluded} label={`${pincluded}%`} bsStyle="success" />
                    <ProgressBar now={pexcluded} label={`${pexcluded}%`} bsStyle="danger" />
                </Panel.Body>
            </Panel.Collapse>
        </Panel>
    );
};


function mapStateToProps(state) {
    return {
        papers: state.papers,
    };
}

export default connect(mapStateToProps)(ProgressWell);
