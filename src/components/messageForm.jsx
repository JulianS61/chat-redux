import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class MessageForm extends Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Message ..." aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-danger" type="button" id="button-addon2">Send</button>
      </div>
    );
  }
}

export default MessageForm;

