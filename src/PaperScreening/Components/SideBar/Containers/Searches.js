import React from 'react';
import { SearchGroups } from '../Presentational/SearchGroups';

class Searches extends React.Component {
    constructor(props) {
        super(props)

        this.addSearchTerm = this.addSearchTerm.bind(this);
        this.removeSearchTerm = this.removeSearchTerm.bind(this);
        this.editSearch = this.editSearch.bind(this);
        this.usedTerm = this.usedTerm.bind(this);

        this.state = {
            searchGroupsList : this.props.searchGroupsList,
        };
    }

    addSearchTerm (object, e) {
        if (e.charCode !== 13 || e.target.value === '' || this.usedTerm(e.target.value)) return;
        object.terms = object.terms.concat(e.target.value)
        let newObject = object
        this.props.updateSearchGroup(newObject)
        return true
    }

    usedTerm(word){
        return (this.props.allTerms.includes(word))
    }

    removeSearchTerm (object, word) {
        object.terms = object.terms.filter(w => w !== word)
        let newObject = object
        this.props.updateSearchGroup(newObject)
    }

    editSearch(object, attribute, attributeList, choice){
        // Create new object with new attribute before updating
        let newObject = object
        newObject[attribute] = attributeList[choice]
        this.props.updateSearchGroup(newObject)
    }

    render() {
        return (
            <SearchGroups
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