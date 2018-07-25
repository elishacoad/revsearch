import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import history from './history';
import allReducers from './app/redux/reducers';

const store = createStore(
    allReducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
);

/* eslint-disable-next-line import/prefer-default-export */
export const makeMainRoutes = () => (
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
);
