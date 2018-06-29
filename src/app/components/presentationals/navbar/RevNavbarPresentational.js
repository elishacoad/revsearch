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
            <Nav pullRight>
                <NavDropdown
                    title={
                        <div style={{ display: 'inline-block' }}>
                            <Glyphicon
                                glyph="wrench"
                                className="nav-dropdown-icon"
                            />
                        </div>
                    }
                    id="nav-dropdown-tools"
                    noCaret
                >
                    <MenuItem eventKey={RevNavbarEventKeys.TOOLS.DOWNLOAD}>
                        <Glyphicon glyph="download-alt" />{' '}Download Papers
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
