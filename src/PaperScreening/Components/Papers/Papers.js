import { Decision, PaperFields, SearchLogic } from '../../../Elements/constants';
import React, { Component } from 'react';

import PapersPresentational from './PapersPresentational';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectRow } from '../../../Actions';

class Papers extends Component {
    constructor(props, context) {
        super(props, context);

        this.applyGroupLogic = this.applyGroupLogic.bind(this);
        this.matchesGroupCriteria = this.matchesGroupCriteria.bind(this);
        this.matchesGroupsCriteria = this.matchesGroupsCriteria.bind(this);
        this.areElibleToShow = this.areElibleToShow.bind(this);
    }

    /**
     * Apply the logic for the search group to a given string
     */
    applyGroupLogic(searchText, group) {
        switch (group.logic) {
            case SearchLogic.CONTAINING:
                return group.terms.every(term => searchText.includes(term));
            case SearchLogic.NOTCONTAINING:
                return group.terms.every(term => !searchText.includes(term));
            default:
            /* This should never be reached since the PaperFields is an
            enum and all the options are covered in the cases above. */
        }
    }

    /**
     * Decide if a paper should be displayed according to a given group.
     */
    matchesGroupCriteria(paper, group) {
        switch (group.field) {
            case PaperFields.ALL:
                return this.applyGroupLogic(Object.values(paper).join(" "), group);
            case PaperFields.TITLE:
                return this.applyGroupLogic(paper.title, group);
            case PaperFields.ABSTRACT:
                return this.applyGroupLogic(paper.abstract, group);
            default:
            /* This should never be reached since the PaperFields is an
            enum and all the options are covered in the cases above. */
        }
    }

    /**
     * Decide if a paper should be displayed to
     * given the search groups that the user has currently set.
     */
    matchesGroupsCriteria(paper) {
        return this.props.searchgroups.every(group => this.matchesGroupCriteria(paper, group));
    }

    /**
     * Decide which papers should be displayed to
     * the search terms that the user has currently set.
     */
    areElibleToShow(allPapers) {
        // filter out papers that don't match the searchgroups criteria
        let papersToShow = allPapers.filter(paper => this.matchesGroupsCriteria(paper));
        // filter out papers that don't match the decision filter criteria
        papersToShow = papersToShow.filter(paper =>
            (this.props.decisionFilter.showIncludes && paper.decision === Decision.INCLUDE)
            || (this.props.decisionFilter.showExcludes && paper.decision === Decision.EXCLUDE)
            || (this.props.decisionFilter.showMaybes && paper.decision === Decision.MAYBE)
            || (this.props.decisionFilter.showUndecided && paper.decision === Decision.NONE)
        );
        return papersToShow;
    }

    render() {
        return (
            <PapersPresentational
                activeKey={this.props.activeRowIndex}
                onSelect={this.props.selectRow}
                paperItems={this.areElibleToShow(this.props.papersItems)}
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
        decisionFilter: state.filters
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectRow: selectRow }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Papers);