import React, { Component } from 'react';

import Filter from './Containers/Filter';
import Keywords from './Containers/KeywordHighlighter';
import LibraryCounts from '../../Components/SideBar/Containers/LibraryCounts';
import ProgressWell from './Containers/ProgressWell';

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
