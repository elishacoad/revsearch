import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import './app/stylesheets/index.css';
import PaperScreening from './app/components/presentationals/paperScreening/PaperScreening';
import RevNavbar from './app/components/elements/RevNavbar';
import { Colors } from './app/globals/constants';

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
