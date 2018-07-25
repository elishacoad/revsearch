// https://manage.auth0.com/#/applications/i9DlcDL1TASkNDhhFaZOXIsx996ySFZ6/quickstart
import React from 'react';
import { Grid } from 'react-bootstrap';

import 'Style/index.scss';
import PaperScreening from 'Presentationals/paperScreening/PaperScreening';
import RevNavbar from './app/components/containers/navbar/RevNavbar';
import SplashPage from './app/components/containers/splashPage/SplashPage';


const App = props => (
    <div id="app">
        <RevNavbar {...props} />
        <SplashPage />
        {props.auth.isAuthenticated() && (
            <Grid fluid>
                <PaperScreening />
            </Grid>
        )}
    </div>
);


export default App;
