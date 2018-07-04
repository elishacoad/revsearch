import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import AddCorpus from 'Containers/paperScreening/AddCorpus';
import Papers from 'Containers/paperScreening/Papers';
import Sidebar from '../sidebar/Sidebar';
import Products from '../../containers/paperScreening/Products';

const PaperScreening = (props) => {
    if (props.papers.length === 0) {
        return (
            <div className="App">
                <AddCorpus />
                <Products />
            </div>
        );
    }

    return (
        <Row>
            <Col xs={12} md={3} lg={3} className="sidebar">
                <Sidebar />
            </Col>
            <Col xs={12} md={9} lg={9} className="paper-review-col">
                <Papers />
            </Col>
        </Row>
    );
};

function mapStateToProps(state) {
    return {
        papers: state.papers,
    };
}

export default connect(mapStateToProps)(PaperScreening);
