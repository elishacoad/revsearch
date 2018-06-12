import React from 'react';
import { Navbar } from 'react-bootstrap';

import { Colors } from '../../globals/constants';

const RevNavbar = () => (
    <Navbar style={{ backgroundColor: Colors.REVNAVY }}>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#home" style={{ color: 'white' }}>reVsearch</a>
            </Navbar.Brand>
        </Navbar.Header>
    </Navbar>);

export default RevNavbar;
