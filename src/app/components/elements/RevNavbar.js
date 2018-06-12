import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import { Colors } from 'Constants';

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