import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { hot } from 'react-hot-loader'

import 'Style';
import PaperScreening from 'Presentationals/paperScreening/PaperScreening';
import RevNavbar from 'Elements/RevNavbar';
import { Colors } from 'Constants';

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

export default hot(module)(App);
