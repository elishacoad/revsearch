import { Checkbox, Panel } from 'react-bootstrap';
import { Colors, Decision } from '../../../../../Constants';
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateFilter } from '../../../../../Actions';

class Keywords extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: true
        };
    }

    tallyDecisions(papers) {
        let includes = 0;
        let excludes = 0;
        let maybes = 0;
        papers.forEach(paper => {
            switch (paper.decision) {
                case Decision.INCLUDE:
                    includes += 1;
                    break;
                case Decision.EXCLUDE:
                    excludes += 1;
                    break;
                case Decision.MAYBE:
                    maybes += 1;
                    break;
                case Decision.NONE:
                    break;
                default:
                    console.log(paper.decision + " is not a valid decision");
            }
        });
        return {
            includes: includes,
            excludes: excludes,
            maybes: maybes,
            undecided: papers.length - (includes + excludes + maybes),
            total: papers.length,
        }
    }
    render() {
        let counts = this.tallyDecisions(this.props.papers);
        return (
            <Panel bsStyle="primary" defaultExpanded expanded={this.state.open}>
                <Panel.Heading
                    style={{
                        "backgroundColor": Colors.REVNAVY,
                        "cursor": "pointer"
                    }}
                    onClick={() => this.setState({ open: !this.state.open })}
                >
                    <Panel.Title toggle style={{ "color": "white" }}>Keywords</Panel.Title>
                </Panel.Heading>
                <Panel.Collapse>
                    <Panel.Body>
                        Total Keywords ({counts.total})
                        <Checkbox defaultChecked
                            onChange={(e) => this.props.updateFilter({ showIncludes: e.target.checked })}>
                            Keyword 1 ({counts.includes})
                        </Checkbox>
                        <Checkbox defaultChecked
                            onChange={(e) => this.props.updateFilter({ showExcludes: e.target.checked })}>
                            Keyword 2 ({counts.excludes})
                        </Checkbox>
                        <Checkbox defaultChecked
                            onChange={(e) => this.props.updateFilter({ showMaybes: e.target.checked })}>
                            Keyword 3 ({counts.maybes})
                        </Checkbox>
                        <Checkbox defaultChecked
                            onChange={(e) => this.props.updateFilter({ showUndecided: e.target.checked })}>
                            Keyword 4 ({counts.undecided})
                        </Checkbox>
                    </Panel.Body>
                </Panel.Collapse>
            </Panel>
        );
    }
}

function mapStateToProps(state) {
    return {
        papers: state.papers
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ updateFilter: updateFilter }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Keywords);
