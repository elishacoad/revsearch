import React from 'react';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import Home from './app/Home/Home';
import Callback from './app/Callback/Callback';
import Auth from './app/Auth/Auth';
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
                <Route path="/" render={props => <App auth={auth} {...props} />} />
                <Route path="/home" render={props => <Home auth={auth} {...props} />} />
                <Route
                    path="/callback"
                    render={(props) => {
                        handleAuthentication(props);
                        return <Callback {...props} />;
                    }}
                />
            </div>
        </Router>
    </Provider>
);
