/* eslint-disable camelcase */
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Message extends Component {
  render() {
    const { author, content, created_at } = this.props.message;
    return (
      <div>
        <h3><strong>{author}</strong><span> - <em>{created_at}</em></span></h3>
        <p>{content}</p>
      </div>
    );
  }
}

export default Message;
