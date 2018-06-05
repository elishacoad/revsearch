import React from 'react'
import { SearchGroup } from '../../../../Elements/SearchGroup';

export const SearchGroups = (props) => {
    return (
        <div className='search-groups'>
            {props.searchGroupsList.map((searchObject, i) => {
                return (
                    <SearchGroup
                        newInput={props.newInput}
                        onInputChange={props.onInputChange}
                        key={searchObject.key}
                        searchObject={searchObject}
                        addSearchTerm={props.addSearchTerm}
                        removeSearchTerm={props.removeSearchTerm}
                        editSearch={props.editSearch}
                    />
                );
            })}
        </div>

    )
}

