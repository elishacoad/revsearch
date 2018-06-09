/** Presentational component for displaying search groups
 *  maps the list of groups to an element search group
 */

import React from 'react'
import { SearchGroup } from '../../../../Elements';

export const SearchGroupsPresentational = (props) => {
    return (
        <div className='search-groups'>
            {props.searchGroupsList.map((searchObject, i) => {
                return (
                    <SearchGroup
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

