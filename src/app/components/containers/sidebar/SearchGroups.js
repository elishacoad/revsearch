/**
 * Container component that receives the list of search groups made by the user
 * from the state, displats them, and handles formatting for updating and
 * removing terms, logic, and field options.
 */
import React from 'react';

import SearchGroupsPresentational from 'Presentationals/sidebar/SearchGroupsPresentational';

class SearchGroups extends React.Component {
    constructor(props) {
        super(props);

        this.addSearchTerm = this.addSearchTerm.bind(this);
        this.removeSearchTerm = this.removeSearchTerm.bind(this);
        this.editSearch = this.editSearch.bind(this);
        this.usedTerm = this.usedTerm.bind(this);
    }

    addSearchTerm(object, e) {
        // if enter key was pressed, or empty field or duplicate do not add search term
        if (e.charCode !== 13 || e.target.value === '' || this.usedTerm(e.target.value)) return;
        const group = object;
        group.terms = group.terms.concat(e.target.value);
        this.props.updateSearchGroup(group);
    }

    usedTerm(word) {
        return (this.props.allTerms.includes(word));
    }

    removeSearchTerm(object, word) {
        const group = object;
        group.terms = group.terms.filter(w => w !== word);
        this.props.updateSearchGroup(group);
    }

    /**
     * Create new object with new attribute before updating.
    */
    editSearch(object, attribute, attributeList, choice) {
        const newObject = object;
        newObject[attribute] = attributeList[choice];
        this.props.updateSearchGroup(newObject);
    }

    render() {
        return (
            <SearchGroupsPresentational
                onInputChange={this.onInputChange}
                searchGroupsList={this.props.searchGroupsList}
                addSearchTerm={this.addSearchTerm}
                removeSearchTerm={this.removeSearchTerm}
                editSearch={this.editSearch}
            />
        );
    }
}

export default SearchGroups;
