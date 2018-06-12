import React from 'react';

import Keywords from '../../containers/sidebar/KeywordHighlighter';
import LibraryCounts from '../../containers/sidebar/LibraryCounts';
import ProgressWell from '../../containers/sidebar/ProgressWell';
import SearchgroupsFilter from '../../containers/sidebar/SearchgroupsFilter';

const Sidebar = () => (
    <div>
        <LibraryCounts />
        <Keywords />
        <SearchgroupsFilter />
        <ProgressWell />
    </div>
);

export default Sidebar;
