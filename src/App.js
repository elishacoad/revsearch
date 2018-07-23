import React from 'react';
import { Grid } from 'react-bootstrap';

import 'Style/index.css';
// import PaperScreening from 'Presentationals/paperScreening/PaperScreening';
import RevNavbar from 'Elements/RevNavbar';
import { Colors } from 'Constants';
import SplashPage from './app/components/containers/splashPage/SplashPage';

const App = () => (
    <div style={{ backgroundColor: Colors.REVBACKGROUND, height: '100vh' }}>
        <RevNavbar />
        <Grid fluid>
            {/* <PaperScreening /> */}
            <SplashPage />
        </Grid>
    </div>
);

export default App;
