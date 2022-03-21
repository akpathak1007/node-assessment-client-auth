import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CRouter from './routes/Router';
import store from './store/store';

render(
  <BrowserRouter>
    <Provider store = {store}>
      <CRouter />
    </Provider>
  </BrowserRouter>,
  document.querySelector("#root")
);
