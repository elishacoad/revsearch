/** This is the body of the paper panel that contains the paper title,
 *  (in smaller text; not the title banner that you click on),
 *  and paper abstract, link, etc. The buttons are also displayed here.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PaperBodyPresentational from 'Presentationals/paperScreening/PaperBodyPresentational';
import { incrementRow, updatePaper } from 'Actions';
import { buildOptionObjects } from 'Globals/helpers';

class PaperBody extends Component {
    constructor(props, context) {
        super(props, context);

        this.changePaperDecision = this.changePaperDecision.bind(this);
        this.state = { options: buildOptionObjects() };
    }

    changePaperDecision(decision) {
        const { paper } = this.props;
        paper.decision = decision;
        this.props.updatePaper(paper);
        this.props.incrementRow();
    }

    render() {
        return (
            <PaperBodyPresentational
                highlightWords={this.props.highlightWords}
                paper={this.props.paper}
                handleDecisionButtonClick={this.changePaperDecision}
                options={this.state.options}
            />);
    }
}

function mapStateToProps(state) {
    return {
        highlightWords: state.highlightWords,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            updatePaper,
            incrementRow,
        },
        dispatch,
    );
}

export default connect(mapStateToProps, matchDispatchToProps)(PaperBody);
