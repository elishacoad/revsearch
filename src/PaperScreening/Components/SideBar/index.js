import React, { Component } from 'react';

import FilterForm from './Components/FilterForm';
import ProgressWell from './Components/ProgressWell';

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <FilterForm />
                <ProgressWell />
            </div>
        );
    }
}