import './App.css';

// import { Col, Grid, Row } from 'react-bootstrap';
import React, { Component } from 'react';

import PaperScreener from './PaperScreening/index';
import RevNavbar from './Components/RevNavbar';

// import SideBar from './Components/SideBar';

/*
<RevNavbar />
<Grid>
  <Row>
    <Col xs={12} md={3} lg={3}>
       <SideBar />
    </Col>
    <Col xs={12} md={9} lg={9}>
      <PaperScreener />
    </Col>
  </Row>
</Grid>
*/
class App extends Component {
  render() {
    return (
      <div>
        <RevNavbar/>
        <PaperScreener />
      </div>
    );
  }
}

export default App;
