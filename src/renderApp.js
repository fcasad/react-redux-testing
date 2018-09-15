import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './store';

const renderApp = rootEl =>
  ReactDOM.render(
    <Provider store={configureStore()}>
      <App />
    </Provider>,
    rootEl,
  );

export default renderApp;
