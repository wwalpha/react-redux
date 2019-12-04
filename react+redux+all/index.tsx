import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './src/store';
import App from './src/App';

const root = document.getElementById('root');

const provider = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(provider, root);
