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
const store = createStore(rootReducer, persistedState || initialState, applyMiddleware(thunk));

store.subscribe(() => {
  saveState({
    ...store.getState()
  });
});

const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate

renderMethod(<App store={store} />, document.getElementById("root"));

serviceWorker.unregister();
