import React from 'react';
import { Checkbox, Panel } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setDecisionFilter } from '../../../redux/actions';
import { Colors } from '../../../globals/constants';
import { tallyDecisions } from '../../../globals/helpers';

const LibraryCounts = (props) => {
    const counts = tallyDecisions(props.papers);
    return (
        <Panel defaultExpanded id="accordion-example" style={{ borderColor: 'gray' }}>
            <Panel.Toggle>
                <Panel.Heading
                    style={{
                        backgroundColor: Colors.REVNAVY,
                        cursor: 'pointer',
                    }}
                >
                    <Panel.Title style={{ color: 'white' }}>Library ({counts.total})</Panel.Title>
                </Panel.Heading>
            </Panel.Toggle>
            <Panel.Collapse>
                <Panel.Body>
                    <Checkbox
                        defaultChecked
                        onChange={e => props.setDecisionFilter({
                            ...props.decisionFilter, showIncludes: e.target.checked,
                        })}
                    >
                        Includes ({counts.includes})
                    </Checkbox>
                    <Checkbox
                        defaultChecked
                        onChange={e => props.setDecisionFilter({
                            ...props.decisionFilter, showExcludes: e.target.checked,
                        })}
                    >
                        Excludes ({counts.excludes})
                    </Checkbox>
                    <Checkbox
                        defaultChecked
                        onChange={e => props.setDecisionFilter({
                            ...props.decisionFilter, showMaybes: e.target.checked,
                        })}
                    >
                        Maybes ({counts.maybes})
                    </Checkbox>
                    <Checkbox
                        defaultChecked
                        onChange={e => props.setDecisionFilter({
                            ...props.decisionFilter, showUndecided: e.target.checked,
                        })}
                    >
                        Undecided ({counts.undecided})
                    </Checkbox>
                </Panel.Body>
            </Panel.Collapse>
        </Panel>
    );
};

function mapStateToProps(state) {
    return {
        papers: state.papers,
        decisionFilter: state.decisionFilter,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ setDecisionFilter }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LibraryCounts);
