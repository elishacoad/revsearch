import React, { Component } from 'react';

import { Navbar } from 'react-bootstrap';

class RevNavbar extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Revsearch</a>
                    </Navbar.Brand>
                </Navbar.Header>
                {/* <Nav>
                    <NavItem eventKey={1} href="#">
                        Link
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link
                    </NavItem>
                </Nav> */}
            </Navbar>
        );
    }
}

export default RevNavbar;
