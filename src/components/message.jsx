import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Message extends Component {
  render() {
    return (
      <div>
        <h3><strong>Author Name</strong><span> - <em>Date</em></span></h3>
        <p>Message</p>
      </div>
    );
  }
}

export default Message;
