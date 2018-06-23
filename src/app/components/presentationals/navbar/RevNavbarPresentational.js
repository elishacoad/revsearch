import React from 'react';
import { Navbar, MenuItem, NavDropdown, Glyphicon, Nav } from 'react-bootstrap';

import { Colors, RevNavbarEventKeys } from '../../../globals/constants';
import DownloadPapersModal from '../../containers/navbar/DownloadPapersModal';

const RevNavbarPresentational = props => (
    <div>
        <Navbar
            style={{ backgroundColor: Colors.REVNAVY }}
            onSelect={props.handleNavSelect}
        >
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home" style={{ color: 'white' }}>reVsearch</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavDropdown
                    title={
                        <div style={{ display: 'inline-block' }}>
                            <Glyphicon glyph="wrench" /> Tools{' '}
                        </div>
                    }
                    id="basic-nav-dropdown"
                >
                    <MenuItem eventKey={RevNavbarEventKeys.TOOLS.DOWNLOAD}>
                        <Glyphicon glyph="download-alt" />{' '}Download All
                    </MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>
        <DownloadPapersModal
            showModal={props.showModal}
            handleModalClose={props.handleModalClose}
        />
    </div>
);

export default RevNavbarPresentational;
