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
                        color="include"
                        checked={props.decisionFilter.allowIncludes}
                        handleChange={checked => props.setDecisionFilter({
                            ...props.decisionFilter, allowIncludes: checked,
                        })}
                    >
                        {`Includes (${counts.includes})`}
                    </Checkmark>
                    <Checkmark
                        color="exclude"
                        checked={props.decisionFilter.allowExcludes}
                        handleChange={checked => props.setDecisionFilter({
                            ...props.decisionFilter, allowExcludes: checked,
                        })}
                    >
                        {`Excludes (${counts.excludes})`}
                    </Checkmark>
                    <Checkmark
                        color="maybe"
                        checked={props.decisionFilter.allowMaybes}
                        handleChange={checked => props.setDecisionFilter({
                            ...props.decisionFilter, allowMaybes: checked,
                        })}
                    >
                        {`Maybes (${counts.maybes})`}
                    </Checkmark>
                    <Checkmark
                        color="undecided"
                        checked={props.decisionFilter.allowUndecided}
                        handleChange={checked => props.setDecisionFilter({
                            ...props.decisionFilter, allowUndecided: checked,
                        })}
                    >
                        {`Undecided (${counts.undecided})`}
                    </Checkmark>
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
