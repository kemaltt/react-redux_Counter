import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import { createStore } from "redux";
import { Provider } from "react-redux";
//import { counterReducer } from "./redux/reducers/reducer";
import { counterStore } from "./redux/index";

//onst store = createStore(counterReducer);
const store = counterStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
