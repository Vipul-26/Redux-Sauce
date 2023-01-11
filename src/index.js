import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from "./App.js";
import store from "./react-redux/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
