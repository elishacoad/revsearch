import React, { Component } from 'react';

import FilterForm from './Components/FilterForm';
import ProgressWell from './Components/ProgressWell';
import Keywords from './Components/Keywords';

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <FilterForm />
                <ProgressWell />
                <Keywords />
            </div>
        );
    }
}