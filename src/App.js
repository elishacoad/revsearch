import React from 'react';
import { Grid } from 'react-bootstrap';

import 'Style';
import PaperScreening from 'Presentationals/paperScreening/PaperScreening';
import RevNavbar from 'Elements/RevNavbar';
import { Colors } from 'Constants';

const App = () => (
    <div style={{ backgroundColor: Colors.REVBACKGROUND }}>
        <RevNavbar />
        <Grid fluid>
            <PaperScreening />
        </Grid>
    </div>
);

export default App;
