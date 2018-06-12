import React from 'react';
import { Grid } from 'react-bootstrap';

import './app/stylesheets/index.css';
import PaperScreening from './app/components/presentationals/paperScreening/PaperScreening';
import RevNavbar from './app/components/elements/RevNavbar';
import { Colors } from './app/globals/constants';

const App = () =>
    (
        <div style={{ backgroundColor: Colors.REVBACKGROUND }}>
            <RevNavbar />
            <Grid fluid>
                <PaperScreening />
            </Grid>
        </div>
    );

export default App;
