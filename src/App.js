import './App.css';

import React, { Component } from 'react';

import { Colors } from "./Constants"
import { Grid } from 'react-bootstrap';
import PaperScreening from './PaperScreening/index';
import RevNavbar from './Components/RevNavbar';

// import SideBar from './Components/SideBar';

class App extends Component {
  render() {
    return (
      <div style={{"backgroundColor": Colors.REVBACKGROUND}}>
        <RevNavbar />
        <Grid fluid>
          <PaperScreening />
        </Grid>
      </div>
    );
  }
}

export default App;
