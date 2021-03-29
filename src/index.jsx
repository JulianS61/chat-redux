// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';
import channelsReducer from './reducers/channelsReducer';
import messagesReducer from './reducers/messagesReducer';
import selectedChannelReducer from './reducers/selectedChannelReducer';
import currentUsernameReducer from './reducers/currentUsernameReducer';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// Redux initial state
const initialState = {
  messages: [
    {
      author: "Guest654",
      content: "Hello world!",
      id: 1,
      created_at: "2017-09-26T23:03:16.365Z"
    },
    {
      author: "Guest835",
      content: "My name is Guest835",
      id: 2,
      created_at: "2017-09-26T23:03:21.194Z"
    }
  ],
  channels: ['General', 'Tokyo', 'batch-467'],
  selectedChannel: "General",
  currentUsername: `Guest${(Math.floor(Math.random() * 900)) + 100}`
  // prompt("Enter your user name :") || `Guest${(Math.floor(Math.random() * 900)) + 100}`
};

const middlewares = applyMiddleware(reduxPromise, logger);

// State and reducers
const reducers = combineReducers({
  currentUsername: currentUsernameReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  messages: messagesReducer,
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
