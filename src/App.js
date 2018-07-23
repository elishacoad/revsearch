import React from 'react';
import { Grid } from 'react-bootstrap';

import 'Style/index.css';
import RevNavbar from './app/components/containers/navbar/RevNavbar';
import SplashPage from './app/components/containers/splashPage/SplashPage';
// import PaperScreening from 'Presentationals/paperScreening/PaperScreening';

const App = () => (
    <div id="app">
        <RevNavbar />
        <Grid fluid>
            {/* <PaperScreening /> */}
            <SplashPage />
        </Grid>
    </div>
);

export default App;
