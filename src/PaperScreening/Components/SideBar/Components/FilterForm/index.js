import { Checkbox, Panel, PanelGroup } from 'react-bootstrap';
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateFilter } from '../../../../../Actions';

class FilterForm extends Component {
    render() {
        return (
            <Panel id="accordion-example" defaultExpanded>
                <Panel.Heading>
                    <Panel.Title toggle>Filter</Panel.Title>
                </Panel.Heading>
                <Panel.Collapse>
                    <Panel.Body collapsible defaultExpanded>
                        <Checkbox defaultChecked
                            onChange={(e) => this.props.updateFilter({ showIncludes: e.target.checked })}>
                            Show Includes
                        </Checkbox>
                        <Checkbox defaultChecked
                            onChange={(e) => this.props.updateFilter({ showExcludes: e.target.checked })}>
                            Show Excludes
                        </Checkbox>
                        <Checkbox defaultChecked
                            onChange={(e) => this.props.updateFilter({ showMaybes: e.target.checked })}>
                            Show Maybes
                        </Checkbox>
                        <Checkbox defaultChecked
                            onChange={(e) => this.props.updateFilter({ showUndecided: e.target.checked })}>
                            Show Undecided
                        </Checkbox>
                    </Panel.Body>
                </Panel.Collapse>
            </Panel>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ updateFilter: updateFilter }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FilterForm);
