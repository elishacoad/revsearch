import React, { Component } from 'react';

import Keywords from './Containers/KeywordHighlighter';
import LibraryCounts from './Containers/LibraryCounts';
import ProgressWell from './Containers/ProgressWell';
import SearchgroupsFilter from './Containers/SearchgroupsFilter';

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
