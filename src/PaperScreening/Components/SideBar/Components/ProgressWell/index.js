import { Badge, Panel, PanelGroup, ProgressBar } from 'react-bootstrap';
import React, { Component } from 'react';

import Decision from '../../../../../Constants';
import { connect } from 'react-redux';

class ProgressWell extends Component {
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
        let pdecided = Math.round(this.getPercent(counts.includes + counts.excludes));
        let pincluded = Math.round(this.getPercent(counts.includes));
        let pexcluded = Math.round(this.getPercent(counts.excludes));

        return (
            // <PanelGroup accordion id="accordion-example">
            <Panel id="accordion-example" defaultExpanded>
                <Panel.Heading>
                    <Panel.Title toggle>
                        Progress <Badge>{this.props.papers.length}</Badge>
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Collapse>
                    <Panel.Body>
                        <ProgressBar now={pdecided} label={`${pdecided}%`} />
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
