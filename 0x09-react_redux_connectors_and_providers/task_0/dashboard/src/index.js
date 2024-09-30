import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App/App";
import uiReducer, { initialState } from "./reducers/uiReducer";
import { Map } from "immutable";

const store = createStore(uiReducer, Map(initialState));

ReactDOM.render(
  <React.ScrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.ScrictMode>,
  document.getElementById("root")
);
