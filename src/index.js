import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import allReducers from './app/redux/reducers';

require('Images/favicon.ico');

const store = createStore(
    allReducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),

);

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(
    <Root />,
    document.getElementById('root'),
);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        render(
            <Root />,
            document.getElementById('root'),
        );
    });
}
