import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Message extends Component {
  render() {
    return (
      <div>
        <p>Author Name<span>Date</span></p>
        <p>Message</p>
      </div>
    );
  }
}

export default Message;
