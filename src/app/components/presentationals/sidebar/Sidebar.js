import React, { Component } from 'react';

import Keywords from '../../containers/sidebar/KeywordHighlighter';
import LibraryCounts from '../../containers/sidebar/LibraryCounts';
import ProgressWell from '../../containers/sidebar/ProgressWell';
import SearchgroupsFilter from '../../containers/sidebar/SearchgroupsFilter';

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
