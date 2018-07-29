import React from 'react';
import { connect } from 'react-redux';
import { MenuItem, NavDropdown, Glyphicon, Navbar, Nav, NavItem } from 'react-bootstrap';
import { RevNavbarEventKeys } from '../../../globals/constants';
import DownloadPapersModal from '../../containers/navbar/DownloadPapersModal';


const RevNavbarPresentational = props => (
    <div>
        <Navbar
            className="rev-navbar"
            onSelect={props.handleNavSelect}
        >
            {props.profile.picture &&
                <img src={props.profile.picture} className="img-circle profile-image" alt="img" />
            }
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home" className="color-white">reVsearch</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
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
                </NavDropdown>

                <NavItem
                    className="btn-margin"
                    onClick={() => props.goTo('landing')}
                >
                    Landing
                </NavItem>
                {props.isAuthenticated() ? (
                    <NavItem
                        className="color-white"
                        onClick={props.logout}
                    >
                        Log Out
                    </NavItem>
                ) : (
                    <NavItem
                        className="color-white"
                        onClick={props.login}
                    >
                        Log In
                    </NavItem>)}
                {props.profile.given_name && (
                    <NavItem>
                        Welcome back {props.profile.given_name}!
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

function mapStateToProps(state) {
    return {
        profile: state.profile,
    };
}

export default connect(mapStateToProps)(RevNavbarPresentational);
