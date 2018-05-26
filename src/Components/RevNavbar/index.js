import React, { Component } from 'react';

import { Colors } from '../../Constants';
import { Navbar } from 'react-bootstrap';

class RevNavbar extends Component {
    render() {
        return (
            <Navbar style={{"backgroundColor" : Colors.REVNAVY}}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home" style={{"color" : "white"}}>reVsearch</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default RevNavbar;