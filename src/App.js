import React from 'react';
import { Grid } from 'react-bootstrap';

import 'Style/index.scss';
import PaperScreening from 'Presentationals/paperScreening/PaperScreening';
import RevNavbar from 'Containers/navbar/RevNavbar';

const App = () => (
    <div id="app">
        <RevNavbar />
        <Grid fluid>
            <PaperScreening />
        </Grid>
    </div>
);

export default App;
