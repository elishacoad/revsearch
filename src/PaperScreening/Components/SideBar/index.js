import React, { Component } from 'react';

import FilterSearch from './Components/FilterSearch';
import Keywords from './Components/Keywords';
import LibraryCounts from './Components/LibraryCounts';
import ProgressWell from './Components/ProgressWell';

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <LibraryCounts />
                <Keywords />
                <FilterSearch />
                <ProgressWell />
            </div>
        );
    }
}