import React from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-bootstrap';

import AddCorpus from 'Containers/paperScreening/AddCorpus';
import Papers from 'Containers/paperScreening/Papers';
import Sidebar from '../sidebar/Sidebar';

const PaperScreening = (props) => {
    if (props.papers.length === 0) {
        return (
            <div className="App">
                <AddCorpus />
            </div>
        );
    }

    return (
        <Grid fluid>
            <Row>
                <Col xs={12} md={3} lg={3} className="sidebar">
                    <Sidebar />
                </Col>
                <Col xs={12} md={9} lg={9} className="paper-review-col">
                    <Papers />
                </Col>
            </Row>
        </Grid>
    );
};

function mapStateToProps(state) {
    return {
        papers: state.papers,
    };
}

export default connect(mapStateToProps)(PaperScreening);
