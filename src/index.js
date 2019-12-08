import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let rerenderEntrieTree = (state) => {
    ReactDOM.render(<BrowserRouter><App state={state} store={store}
                                        dispatch={store.dispatch.bind(store)}/></BrowserRouter>, document.getElementById('root'));
}

rerenderEntrieTree(store.getState());
// addPost={store.addPost.bind(store)
store.subscribe(() => {
    let state = store.getState();
    rerenderEntrieTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
