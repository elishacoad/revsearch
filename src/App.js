import './App.css';

import { Col, Grid, Row } from 'react-bootstrap';
import React, { Component } from 'react';

import PaperScreening from './PaperScreening/index';
import RevNavbar from './Components/RevNavbar';

// import SideBar from './Components/SideBar';

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <RevNavbar />
          </Col>
        </Row>
        <PaperScreening />
      </Grid>
    );
  }
}

export default App;
