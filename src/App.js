import React from 'react';
import { Grid } from 'react-bootstrap';

import 'Style/index.scss';
import RevNavbar from './app/components/containers/navbar/RevNavbar';
import SplashPage from './app/components/containers/splashPage/SplashPage';
import PaperScreening from 'Presentationals/paperScreening/PaperScreening';

const App = () => (
    <div id="app">
        <RevNavbar />
        {/* <PaperScreening /> */}
        <SplashPage />
    </div>
);

export default App;
