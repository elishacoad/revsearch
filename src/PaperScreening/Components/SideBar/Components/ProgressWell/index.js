import { Badge, Panel, ProgressBar } from 'react-bootstrap';
import { Colors, Decision } from '../../../../../Constants';
import React, { Component } from 'react';

import { connect } from 'react-redux';

class ProgressWell extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: true
        };
    }

    getPercent(count) {
        return this.props.papers.length === 0 ? 0 : (count / this.props.papers.length) * 100;
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
            maybes: maybes
        }
    }

    render() {
        let counts = this.tallyDecisions(this.props.papers);
        let pincluded = Math.round(this.getPercent(counts.includes));
        let pexcluded = Math.round(this.getPercent(counts.excludes));

        return (
            // Panel tag throws this error:
            // If the field should be mutable use `defaultExpanded`. Otherwise, set `onToggle`
            <Panel defaultExpanded bsStyle="primary" expanded={this.state.open}>
                <Panel.Heading
                    onClick={() => this.setState({ open: !this.state.open })}
                >
                    <Panel.Title toggle>
                        Progress <Badge>{counts.excludes + counts.includes} / {this.props.papers.length}</Badge>
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Collapse>
                    <Panel.Body>
                        <ProgressBar now={pincluded} label={`${pincluded}%`} bsStyle="success" />
                        <ProgressBar now={pexcluded} label={`${pexcluded}%`} bsStyle="danger" />
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

export default connect(mapStateToProps)(ProgressWell);
