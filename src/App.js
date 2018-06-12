import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

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

export default App;
