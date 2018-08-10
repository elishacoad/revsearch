import React, { Component } from 'react';
import RevNavbarPresentational from '../../presentationals/navbar/RevNavbarPresentational';
import { RevNavbarEventKeys } from '../../../globals/constants';

class RevNavbar extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleModalShow = this.handleModalShow.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleNavSelect = this.handleNavSelect.bind(this);

        this.goTo = this.goTo.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            showModal: false,
        };
    }

    handleNavSelect(eventKey) {
        switch (eventKey) {
            case RevNavbarEventKeys.TOOLS.DOWNLOAD:
                this.handleModalShow();
                break;
            default:
        }
    }

    handleModalClose() {
        this.setState({ showModal: false });
    }

    handleModalShow() {
        this.setState({ showModal: true });
    }

    goTo(route) {
        this.props.history.replace(`/${route}`);
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        return (
            <RevNavbarPresentational
                showModal={this.state.showModal}
                handleModalClose={this.handleModalClose}
                handleNavSelect={this.handleNavSelect}
                goTo={this.goTo}
                login={this.login}
                logout={this.logout}
                isAuthenticated={this.props.auth.isAuthenticated}
            />);
    }
}

export default RevNavbar;
