import React, { Component } from 'react';
import Message from './message';
import MessageForm from './messageForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// eslint-disable-next-line react/prefer-stateless-function
class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        <div>
          <h2><FontAwesomeIcon icon={['fab', 'slack-hash']} /> ch1</h2>
          <hr />
        </div>
        <div>
          <div>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
          </div>
          <hr />
          <MessageForm />
        </div>
      </div>
    );
  }
}

export default MessageList;
