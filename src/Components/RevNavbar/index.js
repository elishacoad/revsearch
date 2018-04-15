import React, { Component } from 'react';

import { Navbar } from 'react-bootstrap';

class RevNavbar extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">reVsearch</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default RevNavbar;