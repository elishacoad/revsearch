import React, { Component } from 'react';
import RevNavbarPresentational from '../../presentationals/navbar/RevNavbarPresentational';
import { RevNavbarEventKeys } from '../../../globals/constants';

class RevNavbar extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleModalShow = this.handleModalShow.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleNavSelect = this.handleNavSelect.bind(this);

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

    render() {
        return (
            <RevNavbarPresentational
                showModal={this.state.showModal}
                handleModalClose={this.handleModalClose}
                handleNavSelect={this.handleNavSelect}
            />);
    }
}

export default RevNavbar;
