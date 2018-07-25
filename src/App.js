// https://manage.auth0.com/#/applications/i9DlcDL1TASkNDhhFaZOXIsx996ySFZ6/quickstart
import React from 'react';
import { Route } from 'react-router-dom';

import 'Style/index.scss';
import PaperScreening from 'Presentationals/paperScreening/PaperScreening';
import Auth from './app/auth';
import RevNavbar from './app/components/containers/navbar/RevNavbar';
import SplashPage from './app/components/containers/splashPage/SplashPage';
import Callback from './app/components/containers/callback/Callback';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
};

const App = props => (
    <div id="app">
        <RevNavbar auth={auth} {...props} />
        <Route
            exact
            path="/"
            render={p =>
                (auth.isAuthenticated() ?
                    <PaperScreening auth={auth} {...p} /> :
                    <SplashPage auth={auth} {...p} />)}
        />
        <Route path="/paperscreening" render={p => <PaperScreening auth={auth} {...p} />} />
        <Route
            path="/callback"
            render={(p) => {
                handleAuthentication(p);
                return <Callback />;
            }}
        />
    </div>
);


export default App;
