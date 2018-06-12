import React from 'react';
import { Checkbox, Panel } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateFilter } from '../../../redux/actions';
import { Colors } from '../../../globals/constants';
import { tallyDecisions } from '../../../globals/helpers';

const LibraryCounts = (props) => {
    const counts = tallyDecisions(props.papers);
    return (
        <Panel id="accordion-example" style={{ borderColor: 'gray' }}>
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
                        onChange={e => props.updateFilter({ showIncludes: e.target.checked })}
                    >
                        Includes ({counts.includes})
                    </Checkbox>
                    <Checkbox
                        defaultChecked
                        onChange={e => props.updateFilter({ showExcludes: e.target.checked })}
                    >
                        Excludes ({counts.excludes})
                    </Checkbox>
                    <Checkbox
                        defaultChecked
                        onChange={e => props.updateFilter({ showMaybes: e.target.checked })}
                    >
                        Maybes ({counts.maybes})
                    </Checkbox>
                    <Checkbox
                        defaultChecked
                        onChange={e => props.updateFilter({ showUndecided: e.target.checked })}
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
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ updateFilter }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LibraryCounts);
