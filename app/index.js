import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App.js";
import { Provider } from "react-redux";
import {store} from './stores/AppStore';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
