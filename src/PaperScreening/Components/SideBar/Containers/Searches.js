import React from 'react';
import { SearchGroups } from '../Presentational/SearchGroups';

class Searches extends React.Component {
    constructor(props) {
        super(props)

        this.addSearchTerm = this.addSearchTerm.bind(this);
        this.removeSearchTerm = this.removeSearchTerm.bind(this);
        this.editSearch = this.editSearch.bind(this);
        this.onInputChange = this.onInputChange.bind(this);

        this.state = {
            searchGroupsList : this.props.searchGroupsList,
            newInput : ''
        };
    }

    addSearchTerm (object, e) {
        if (e.charCode !== 13 || e.target.value == '') return;
        object.terms = object.terms.concat(e.target.value)
        let newObject = object
        this.props.updateSearchGroup(newObject)

        this.setState({
            newInput : ''
        })
    }

    onInputChange(e){
        this.setState({ newInput: e.target.value })
    }

    removeSearchTerm (object, word) {
        object.terms = object.terms.filter(w => w !== word)
        let newObject = object
        this.props.updateSearchGroup(newObject)

        this.setState({
            newInput : ''
        })
    }

    editSearch(newObject){
        this.props.updateSearchGroup(newObject)
    }

    render() {
        return (
            <SearchGroups
                newInput={this.state.newInput}
                onInputChange={this.onInputChange}
                searchGroupsList={this.props.searchGroupsList}
                addSearchTerm={this.addSearchTerm}
                removeSearchTerm={this.removeSearchTerm}
                editSearch={this.editSearch}
            />
        )
    }
}

export default Searches;