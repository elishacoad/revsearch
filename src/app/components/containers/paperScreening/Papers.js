/** This is the entire collection of PaperPanels. It is a collection of panels
 *  that behave as an 'accordian effect' in that when you chose a decision
 *  on one paper, that paper body closes and the next paper body opens.
 *  The logic to decide which papers to present to the user is also here.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PapersPresentational from 'Presentationals/paperScreening/PapersPresentational';
import { selectRow } from 'Actions';
import { Decision } from 'Constants';
import { matchesGroupCriteria } from 'Globals/helpers';

class Papers extends Component {
    constructor(props, context) {
        super(props, context);

        this.matchesGroupsCriteria = this.matchesGroupsCriteria.bind(this);
        this.areEligibleToShow = this.areEligibleToShow.bind(this);
    }

    /**
     * Decide if a paper should be displayed given
     * the search groups that the user has currently set.
     */
    matchesGroupsCriteria(paper) {
        return this.props.searchgroups.every(group => matchesGroupCriteria(paper, group));
    }

    /**
     * Decide which papers should be displayed to
     * the search terms that the user has currently set.
     */
    areEligibleToShow(allPapers) {
        // filter out papers that don't match the searchgroups criteria
        let papersToShow = allPapers.filter(paper => this.matchesGroupsCriteria(paper));
        // filter out papers that don't match the decision filter criteria
        papersToShow = papersToShow.filter(paper => (
            this.props.decisionFilter.showIncludes && paper.decision === Decision.INCLUDE)
            || (this.props.decisionFilter.showExcludes && paper.decision === Decision.EXCLUDE)
            || (this.props.decisionFilter.showMaybes && paper.decision === Decision.MAYBE)
            || (this.props.decisionFilter.showUndecided && paper.decision === Decision.NONE));
        return papersToShow;
    }

    render() {
        return (
            <PapersPresentational
                activeKey={this.props.activeRowIndex}
                onSelect={this.props.selectRow}
                paperItems={this.areEligibleToShow(this.props.papersItems)}
                activeRowIndex={this.props.activeRowIndex}
                selectRow={this.props.selectRow}
            />);
    }
}

function mapStateToProps(state) {
    return {
        papersItems: state.papers,
        activeRowIndex: state.activeRowIndex,
        searchgroups: state.searchgroups,
        decisionFilter: state.decisionFilter,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectRow }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Papers);
