import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createApi, ApiProvider } from 'redux-apimap';
// import App from './App';
import allReducers from './app/redux/reducers';
import users from './app/globals/users';
import UsersList from './app/components/containers/UsersList';

const store = createStore(
    allReducers,
    compose(
        applyMiddleware(thunk),
        // eslint-disable-next-line no-underscore-dangle
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),

);

const api = createApi(
    store,
    { users },
    { json: true, baseUrl: 'https://jsonplaceholder.typicode.com' },
);

ReactDOM.render(
    <Provider store={store}>
        <ApiProvider api={api}>
            {/* <App /> */}
            <UsersList />
        </ApiProvider>
    </Provider>,
    document.getElementById('root'),
);
