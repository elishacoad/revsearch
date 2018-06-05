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
            searchgroups: this.props.searchgroups
        };

        this.addSearchGroup = this.addSearchGroup.bind(this)
        this.updateSearchGroup = this.updateSearchGroup.bind(this)
    }

    componentWillReceiveProps(nextProps){
        if (nextProps){
            this.setState({
                searchgroups: nextProps.searchgroups || []
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
        //Must look for correct object to update
        console.log("UPDATE")
        console.log(newObject)
        console.log(this.props)
        this.props.updateSearchgroups(newObject);
    }

    render() {
        return (
            <FilterSearch 
            onClick={this.addSearchGroup}
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