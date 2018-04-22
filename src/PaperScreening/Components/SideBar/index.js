import React, { Component } from 'react';

import FilterForm from './Components/FilterForm';
import Keywords from './Components/Keywords';
import ProgressWell from './Components/ProgressWell';

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <Keywords />
                <FilterForm />
                <ProgressWell />
            </div>
        );
    }
}