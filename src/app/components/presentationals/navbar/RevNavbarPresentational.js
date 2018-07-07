import React from 'react';
import { Navbar, MenuItem, NavDropdown, Glyphicon, Nav } from 'react-bootstrap';

import { RevNavbarEventKeys } from '../../../globals/constants';
import DownloadPapersModal from '../../containers/navbar/DownloadPapersModal';

const RevNavbarPresentational = props => (
    <div>
        <Navbar
            className="rev-navbar"
            onSelect={props.handleNavSelect}
        >
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home" className="color-white">reVsearch</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <NavDropdown
                    title={
                        <div
                            style={{ display: 'inline-block' }}
                            className="color-white"
                        >
                            <Glyphicon
                                glyph="list-alt"
                                className="nav-dropdown-icon"
                            />
                            {' '} Paper Options
                        </div>
                    }
                    id="nav-dropdown-tools"
                    className="color-white"
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
