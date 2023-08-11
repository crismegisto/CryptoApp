import React from 'react';
import { Provider } from 'react-redux';

import { setupStore } from './src/store';
import App from './src';

const store = setupStore();

export default function index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
