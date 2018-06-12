/** 
 * Container component handles filtering of papers using field, logic, and terms options 
 * given by user to filter out specific papers, user can create search groups
 * and edit/remove them.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'uuid';

import FilterPresentational from '../../presentationals/sidebar/FilterPresentational';
import { PaperFields, SearchLogic } from '../../../globals/constants'
import { addSearchgroups, updateSearchgroups } from '../../../redux/actions';

class SearchgroupsFilter extends Component {
    constructor(props, context) {
        super(props, context);

        // list of all the terms form every search group object
        // used to check for duplicates
        this.state = {
            allTerms: this.generateTermsList(this.props.searchgroups)
        };

        this.addSearchGroup = this.addSearchGroup.bind(this);
        this.updateSearchGroup = this.updateSearchGroup.bind(this);
        this.generateTermsList = this.generateTermsList.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if (nextProps){
            this.setState({
                allTerms: this.generateTermsList(nextProps.searchgroups)
            });
        }
    }

    /**
     * Create a new empty with default values search group and adds to list.
     */
    addSearchGroup() {
        this.props.addSearchgroups({
            key: uuid.v1(),
            field: PaperFields.ALL,
            logic: SearchLogic.CONTAINING,
            terms: []
        });
    }

    /** 
     * Call this whenever a new term is added, or any field/logic is modified.
    */
    updateSearchGroup(newObject) {
        this.props.updateSearchgroups(newObject);
    }

    /**
     * Create the list of the terms for every object in the search group list.
     */
    generateTermsList(searchGroups){
        let allTerms = [];
        searchGroups.map((searchObject, i) => {
            allTerms.push.apply(allTerms, searchObject.terms);
            return allTerms;
        })
        return allTerms;
    }

    render() {
        return (
            <FilterPresentational
            addSearchGroup={this.addSearchGroup}
            allTerms={this.state.allTerms}
            updateSearchGroup={this.updateSearchGroup}
            searchGroups={this.props.searchgroups}
            buttonTitle="+ new search"/>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchgroups: state.searchgroups
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addSearchgroups: addSearchgroups,
        updateSearchgroups: updateSearchgroups,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchgroupsFilter);