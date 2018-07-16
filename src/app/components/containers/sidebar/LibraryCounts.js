import React from 'react';
import { Panel } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Checkmark } from 'Elements';
import { setDecisionFilter } from 'Actions';
import { tallyDecisions } from 'Globals/helpers';

const LibraryCounts = (props) => {
    const counts = tallyDecisions(props.papers);
    return (
        <Panel defaultExpanded id="accordion-library">
            <Panel.Toggle>
                <Panel.Heading className="sidebar-panel-heading">
                    <Panel.Title className="sidebar-panel-title">Library ({counts.total})</Panel.Title>
                </Panel.Heading>
            </Panel.Toggle>
            <Panel.Collapse>
                <Panel.Body>
                    <Checkmark
                        color="green"
                        checked={props.decisionFilter.allowIncludes}
                        label={`Includes (${counts.includes})`}
                        handleChange={checked => props.setDecisionFilter({
                            ...props.decisionFilter, allowIncludes: checked,
                        })}
                    />
                    <Checkmark
                        color="red"
                        checked={props.decisionFilter.allowExcludes}
                        label={`Excludes (${counts.excludes})`}
                        handleChange={checked => props.setDecisionFilter({
                            ...props.decisionFilter, allowExcludes: checked,
                        })}
                    />
                    <Checkmark
                        color="blue"
                        checked={props.decisionFilter.allowMaybes}
                        label={`Maybes (${counts.maybes})`}
                        handleChange={checked => props.setDecisionFilter({
                            ...props.decisionFilter, allowMaybes: checked,
                        })}
                    />
                    <Checkmark
                        color="gray"
                        checked={props.decisionFilter.allowUndecided}
                        label={`Undecided (${counts.undecided})`}
                        handleChange={checked => props.setDecisionFilter({
                            ...props.decisionFilter, allowUndecided: checked,
                        })}
                    />
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
