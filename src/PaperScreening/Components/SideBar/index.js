import React, { Component } from 'react';

import Keywords from './Components/Keywords';
import LibraryCounts from './Components/LibraryCounts';
import ProgressWell from './Components/ProgressWell';
import Filter from './Containers/Filter';

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <LibraryCounts />
                <Keywords />
                <Filter />
                <ProgressWell />
            </div>
        );
    }
}