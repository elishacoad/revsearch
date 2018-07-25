import React from 'react';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import Landing from './app/components/containers/landing/Landing';
import Callback from './app/components/containers/callback/Callback';
import Auth from './app/auth/auth';
import history from './history';
import allReducers from './app/redux/reducers';


const auth = new Auth();

const store = createStore(
    allReducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
);

const handleAuthentication = ({ location }) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
};

/* eslint-disable-next-line import/prefer-default-export */
export const makeMainRoutes = () => (
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route path="/landing" render={props => <Landing auth={auth} {...props} />} />
                <Route path="/paperscreening" render={props => <App auth={auth} {...props} />} />
                <Route
                    path="/callback"
                    render={(props) => {
                        handleAuthentication(props);
                        return <Callback />;
                    }}
                />
            </div>
        </Router>
    </Provider>
);
