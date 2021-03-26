// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// Redux initial state
const initialState = {
  message: [],
  channel: ['General', 'Tokyo', 'batch-467'],
  selectedChanne: "General",
  currentUserName: prompt("Enter your user name :") || (Math.floor(Math.random() * 900)) + 100,
};

// State and reducers
const reducers = combineReducers({
  changeMe: (state = null, action) => state
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
