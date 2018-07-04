/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import allReducers from './app/redux/reducers';

require('Images/favicon.ico');

const store = createStore(
    allReducers,
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
      render(<Root/>,
          document.getElementById('root'))
  })
}