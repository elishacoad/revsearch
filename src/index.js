import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import allReducers from './app/redux/reducers';

const store = createStore(
    allReducers,
    compose(
        applyMiddleware(thunk),
        // eslint-disable-next-line no-underscore-dangle
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),

);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
