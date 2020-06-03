import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { loadState, saveState } from './localStorage';

const initialState = global.window && global.window.__INITIAL_STATE__;

const persistedState = loadState();

// console.log(initialState, JSON.stringify(persistedState));


const store = createStore(rootReducer, persistedState || initialState, applyMiddleware(thunk));


store.subscribe(() => {
  saveState({
    ...store.getState()
  });
});

ReactDOM.hydrate(<App store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
