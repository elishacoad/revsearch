import React from 'react';
import { MenuItem, NavDropdown, Glyphicon, Navbar, Nav, NavItem } from 'react-bootstrap';
import { RevNavbarEventKeys } from '../../../globals/constants';
import DownloadPapersModal from '../../containers/navbar/DownloadPapersModal';
// import logo from '../../../../assets/logo.png';

const RevNavbarPresentational = props => (
    <div>
        <Navbar
            className="rev-navbar"
            onSelect={props.handleNavSelect}
        >
            <Navbar.Header>
                <Navbar.Brand>
                    {/* <img className="d-inline-block align-top"
                style={{ "max-width": "30px" }} src={logo} /> */}
                    <a href="#home" className="color-white">reVsearch</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                {props.isAuthenticated() && (
                    <NavDropdown
                        title={
                            <div className="white-dropdown">
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
                    </NavDropdown>)}
                {
                    !props.isAuthenticated() && (
                        <NavItem
                            className="color-white"
                            onClick={props.login}
                        >
                            Log In
                        </NavItem>)
                }
                {
                    props.isAuthenticated() && (
                        <NavItem
                            className="color-white"
                            onClick={props.logout}
                        >
                            Log Out
                        </NavItem>)
                }
            </Nav>
        </Navbar>
        <DownloadPapersModal
            showModal={props.showModal}
            handleModalClose={props.handleModalClose}
        />
    </div>
);

export default RevNavbarPresentational;
