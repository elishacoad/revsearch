import './App.css';

import { Grid } from 'react-bootstrap';
import React, { Component } from 'react';

import PaperScreening from './PaperScreening/index';
import RevNavbar from './Components/RevNavbar';

// import SideBar from './Components/SideBar';

class App extends Component {
  render() {
    return (
      <div className="viewport-div">
        <RevNavbar />
        <Grid fluid>
          <PaperScreening />
        </Grid>
      </div>
    );
  }
}

export default App;
