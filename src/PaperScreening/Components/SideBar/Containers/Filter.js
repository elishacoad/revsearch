//import { Button, Panel } from 'react-bootstrap';
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PaperFields, SearchLogic } from '../../../../Constants';
import { addSearchgroups, updateSearchgroups } from '../../../../Actions';
import uuid from 'uuid';
import { FilterSearch } from '../Presentational/FilterSearch';

class Filter extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            searchgroups: this.props.searchgroups,
            allTerms: this.generateTermsList(this.props.searchgroups)
        };

        this.addSearchGroup = this.addSearchGroup.bind(this)
        this.updateSearchGroup = this.updateSearchGroup.bind(this)
        this.generateTermsList = this.generateTermsList.bind(this)
    }

    componentWillReceiveProps(nextProps){
        if (nextProps){
            this.setState({
                searchgroups: nextProps.searchgroups || [],
                allTerms: this.generateTermsList(nextProps.searchgroups)
            })
        }
    }

    addSearchGroup() {
        this.props.addSearchgroups({
            key: uuid.v1(),
            field: PaperFields.ALL,
            logic: SearchLogic.CONTAINING,
            terms: []
        });
    }

    updateSearchGroup(newObject) {
        this.props.updateSearchgroups(newObject);
    }

    generateTermsList(searchGroups){
        let allTerms = []
        
        searchGroups.map((searchObject, i) => {
            allTerms.push.apply(allTerms, searchObject.terms)
            return allTerms
        })

        console.log(allTerms)

        return allTerms
    }

    render() {
        
        return (
            <FilterSearch 
            onClick={this.addSearchGroup}
            allTerms={this.state.allTerms}
            updateSearchGroup={this.updateSearchGroup}
            searchGroups={this.state.searchgroups}
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

export default connect(mapStateToProps, matchDispatchToProps)(Filter);