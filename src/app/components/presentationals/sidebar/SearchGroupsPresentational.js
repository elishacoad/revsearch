/** Presentational component for displaying search groups
 *  maps the list of groups to an element search group
 */
import React from 'react';

import { SearchGroup } from '../../elements';

const SearchGroupsPresentational = props => (
    <div className="search-groups">
        {props.searchGroupsList.map(searchObject => (
            <SearchGroup
                onInputChange={props.onInputChange}
                key={searchObject.key}
                searchObject={searchObject}
                addSearchTerm={props.addSearchTerm}
                removeSearchTerm={props.removeSearchTerm}
                editSearch={props.editSearch}
            />
        ))}
    </div>
);

export default SearchGroupsPresentational;
