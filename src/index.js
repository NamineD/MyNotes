import React, { StrictMode } from "react";
import {createRoot} from 'react-dom/client';

import App from "./App";
import store from "./Redux/CounterSlice";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>,
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
