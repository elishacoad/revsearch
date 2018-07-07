import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';

import AddCorpusPresentational from '../../presentationals/paperScreening/AddCorpusPresentational';
import parseCorpus from '../../../globals/corpusParser';
import { fetchPapers, fetchPapersSuccess } from '../../../redux/actions/papersActions';
import { Colors } from "../../../globals/constants";
import BackendErrorModal from "../../elements/BackendErrorModal";

class AddCorpus extends Component {
    constructor(props, context) {
        super(props, context);

        this.setCorpusToString = this.setCorpusToString.bind(this);
        this.readFile = this.readFile.bind(this);
        this.addFromDatabase = this.addFromDatabase.bind(this);

    }

    /**
   * Set the collection of papers by reading in a string, parsing it
   * and setting the global state corpus to the result.
   */
    setCorpusToString(inputText) {
        const corpus = parseCorpus(inputText);
        this.props.fetchPapersSuccess(corpus);
    }

    readFile(e) {
        e.preventDefault();
        const file = e.target.files[0];
        // FileReader is a global class so eslint says its undefined
        // eslint-disable-next-line no-undef
        const read = new FileReader();
        read.readAsBinaryString(file);
        read.onloadend = () => {
            this.setCorpusToString(read.result);
        };
    }

    addFromDatabase() {
        this.props.fetchPapers();
    }

    render() {
        if (this.props.paperRetrievalLoading) {
            return (<ReactLoading
                className="center-block"
                type="bars"
                color={Colors.REVNAVY}
            />);
        }
        return (
            <div>
                <BackendErrorModal
                    backendContactError={this.props.paperRetrievalError}
                >
                    Try one of the other options.
                </ BackendErrorModal>
                <AddCorpusPresentational
                    setCorpus={this.setCorpusToString}
                    readFile={this.readFile}
                    addFromDatabase={this.addFromDatabase}
                    paperRetrievalLoading={this.props.paperRetrievalLoading}
                    paperRetrievalError={this.props.paperRetrievalError}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        paperRetrievalLoading: state.paperstate.loading,
        paperRetrievalError: state.paperstate.error,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPapersSuccess, fetchPapers }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AddCorpus);
