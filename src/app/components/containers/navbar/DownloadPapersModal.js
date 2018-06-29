import React, { Component } from 'react';

import { connect } from 'react-redux';
import DownloadPapersModalPresentational from '../../presentationals/navbar/DownloadPapersModalPresentational';

import { ENDNOTE_SECTION_DELIMITERS, PAPER_FIELDS } from '../../../globals/constants';
import { tallyDecisions, downloadTextFile, decisionFilterPapers } from '../../../globals/helpers';

/**
 * Take a list of paper objects and format it into a string
 * according to formatting above using section delimiters.
 */
const formatEndnoteCorpus = (papers) => {
    let text = '';
    papers.forEach((paper) => {
        PAPER_FIELDS.forEach((property) => {
            // have to use this so you dont get inherited properties
            if (Object.prototype.hasOwnProperty.call(paper, property)) {
                text += `%${ENDNOTE_SECTION_DELIMITERS[property]} ${paper[property]}\n`;
            }
        });
        text += '\n';
    });
    return text;
};

class DownloadPapersModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleFilenameChange = this.handleFilenameChange.bind(this);
        this.handleFilenameChange = this.handleFilenameChange.bind(this);
        this.setDecisionFilter = this.setDecisionFilter.bind(this);
        this.handleDownload = this.handleDownload.bind(this);
        this.handleFilenameKeypress = this.handleFilenameKeypress.bind(this);

        const defaultDecisionFilter = {
            allowIncludes: true,
            allowExcludes: true,
            allowMaybes: true,
            allowUndecided: true,
        };

        this.state = {
            filename: '',
            decisionFilter: defaultDecisionFilter,
            papersEligibleToDownload: decisionFilterPapers(
                defaultDecisionFilter,
                this.props.papers,
            ),
        };
    }

    componentWillReceiveProps(nextProps) {
        // if the papers are updated, we need to reset the
        // papersEligibleToDownload with the new papers.
        if (nextProps.papers !== this.props.papers) {
            this.setState({
                papersEligibleToDownload: decisionFilterPapers(
                    this.state.decisionFilter,
                    nextProps.papers,
                ),
            });
        }
    }

    setDecisionFilter(decisionFilter) {
        this.setState({
            decisionFilter,
            papersEligibleToDownload: decisionFilterPapers(
                decisionFilter,
                this.props.papers,
            ),
        });
    }

    handleFilenameChange(e) {
        this.setState({ filename: e.target.value });
    }

    handleFilenameKeypress(e) {
        // if the user pressed enter (13), don't refresh the page
        if (e.charCode === 13) {
            e.preventDefault();
            this.handleDownload();
        }
    }

    handleDownload() {
        if (!this.state.papersEligibleToDownload.length) return;
        const endnoteText = formatEndnoteCorpus(this.state.papersEligibleToDownload);
        downloadTextFile(this.state.filename, endnoteText);
        this.props.handleModalClose();
    }

    render() {
        const counts = tallyDecisions(this.props.papers);

        return (<DownloadPapersModalPresentational
            decisionCounts={counts}
            handleFilenameChange={this.handleFilenameChange}
            handleFilenameKeypress={this.handleFilenameKeypress}
            handleDownloadButtonClick={this.handleDownload}
            handleModalClose={this.props.handleModalClose}
            showModal={this.props.showModal}
            setDecisionFilter={this.setDecisionFilter}
            decisionFilter={this.state.decisionFilter}
            canDownload={!!this.state.papersEligibleToDownload.length}
        />);
    }
}

function mapStateToProps(state) {
    return {
        papers: state.papers,
    };
}


export default connect(mapStateToProps)(DownloadPapersModal);
