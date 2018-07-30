import React from 'react';

import Keywords from 'Containers/sidebar/KeywordHighlighter';
import LibraryCounts from 'Containers/sidebar/LibraryCounts';
import ProgressWell from 'Containers/sidebar/ProgressWell';
import SearchgroupsFilter from 'Containers/sidebar/SearchgroupsFilter';

const Sidebar = () => (
    <div className="panel-group">
        <LibraryCounts />
        <Keywords />
        <SearchgroupsFilter />
        <ProgressWell />
    </div>
);

export default Sidebar;
