import React, { Component } from 'react';

import { connect } from 'react-redux';
import DownloadPapersModalPresentational from '../../presentationals/navbar/DownloadPapersModalPresentational';


class DownloadPapersModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleFilenameChange = this.handleFilenameChange.bind(this);
        this.handleFilenameChange = this.handleFilenameChange.bind(this);

        this.state = {
            filename: '',
        };
    }

    handleFilenameChange(e) {
        // if anything else then enter key was pressed, or empty field, do not set
        this.setState({ filename: e.target.value });
    }

    render() {
        return (<DownloadPapersModalPresentational
            handleFilenameChange={this.state.handleFilenameChange}
            showModal={this.props.showModal}
            handleModalClose={this.props.handleModalClose}
        />);
    }
}

function mapStateToProps(state) {
    return {
        papers: state.papers,
    };
}


export default connect(mapStateToProps)(DownloadPapersModal);
