import React from "react";
import ReactDOM from "react-dom";	import ReactDOM from "react-dom";
import App from "./components/App";	import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";


ReactDOM.render(<App></App>, document.getElementById("root"));	ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
 

import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = text => {
  return {
    type: ADD,
    text
  };
};

export const deleteToDo = id => {
  return {
    type: DELETE,
    id
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter(toDo => toDo !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
//git test