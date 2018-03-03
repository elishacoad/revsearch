import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import allReducers from './Reducers';
import { createStore } from 'redux';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
