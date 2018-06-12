import React, { Component } from 'react';

import Keywords from 'Containers/sidebar/KeywordHighlighter';
import LibraryCounts from 'Containers/sidebar/LibraryCounts';
import ProgressWell from 'Containers/sidebar/ProgressWell';
import SearchgroupsFilter from 'Containers/sidebar/SearchgroupsFilter';

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <LibraryCounts />
                <Keywords />
                <SearchgroupsFilter />
                <ProgressWell />
            </div>
        );
    }
}
