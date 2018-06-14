/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import allReducers from './app/redux/reducers';

require('Images/favicon.ico');

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
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