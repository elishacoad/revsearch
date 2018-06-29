import React, { Component } from 'react';

import { connect } from 'react-redux';
import DownloadPapersModalPresentational from '../../presentationals/navbar/DownloadPapersModalPresentational';

import { Decision, ENDNOTE_SECTION_DELIMITERS, PAPER_FIELDS } from '../../../globals/constants';
import { tallyDecisions } from '../../../globals/helpers';

/**
 * Take a list of paper objects and format it into a string
 * according to formatting above using section delimiters.
 */
const formatEndnoteCorpus = (papers) => {
    let text = '';
    papers.forEach((paper) => {
        PAPER_FIELDS.forEach((property) => {
            // have to use this so you dont get inherited properties
            if (paper.hasOwnProperty(property)) {
                text += `%${ENDNOTE_SECTION_DELIMITERS[property]} ${paper[property]}\n`;
            }
        });
        text += '\n';
    });
    return text;
};

const downloadTextFile = (filename, text) => {
    const element = document.createElement('a');
    element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`);
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
};

/**
 * Decide which papers should be displayed to
 * the search terms that the user has currently set.
 */
const areEligibleToDownload = (decisionsToDownload, allPapers) =>
    // filter out papers that don't match the decision filter criteria
    allPapers.filter(paper => (
        decisionsToDownload.downloadIncludes && paper.decision === Decision.INCLUDE)
        || (decisionsToDownload.downloadExcludes && paper.decision === Decision.EXCLUDE)
        || (decisionsToDownload.downloadMaybes && paper.decision === Decision.MAYBE)
        || (decisionsToDownload.downloadNone && paper.decision === Decision.NONE));

class DownloadPapersModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleFilenameChange = this.handleFilenameChange.bind(this);
        this.handleFilenameChange = this.handleFilenameChange.bind(this);
        this.setDecisionFilter = this.setDecisionFilter.bind(this);
        this.handleDownload = this.handleDownload.bind(this);
        this.handleFilenameKeypress = this.handleFilenameKeypress.bind(this);

        this.state = {
            filename: '',
            decisionFilter: {
                downloadIncludes: true,
                downloadExcludes: true,
                downloadMaybes: true,
                downloadNone: true,
            },
        };
    }

    setDecisionFilter(decisionFilter) {
        this.setState({ decisionFilter });
    }

    handleFilenameChange(e) {
        this.setState({ filename: e.target.value });
    }

    handleFilenameKeypress(e) {
        if (e.charCode === 13) { // enter
            e.preventDefault(); // don't refresh the page
            this.handleDownload();
        }
    }

    handleDownload() {
        const papersEligibleToDownload = areEligibleToDownload(
            this.state.decisionFilter,
            this.props.papers,
        );
        console.log(this.state.decisionFilter);
        console.log(papersEligibleToDownload.length, this.props.papers.length);
        const endnoteText = formatEndnoteCorpus(papersEligibleToDownload);
        downloadTextFile(this.state.filename, endnoteText);
        this.props.handleModalClose();
    }

    render() {
        const counts = tallyDecisions(this.props.papers);

        return (<DownloadPapersModalPresentational
            decisionCounts={counts}
            handleFilenameChange={this.handleFilenameChange}
            handleFilenameKeypress={this.handleFilenameKeypress}
            handleDownload={this.handleDownload}
            handleModalClose={this.props.handleModalClose}
            showModal={this.props.showModal}
            setDecisionFilter={this.setDecisionFilter}
            decisionFilter={this.decisionFilter}
        />);
    }
}

function mapStateToProps(state) {
    return {
        papers: state.papers,
    };
}


export default connect(mapStateToProps)(DownloadPapersModal);
