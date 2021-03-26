import React, { Component } from 'react';
import Message from './message';
import MessageForm from './messageForm';


// eslint-disable-next-line react/prefer-stateless-function
class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        <h2>Channel Name</h2>
        <div>
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
        <MessageForm />
      </div>
    );
  }
}

export default MessageList;
