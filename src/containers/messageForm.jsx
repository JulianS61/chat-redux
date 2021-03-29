import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createMessage } from '../actions';

// eslint-disable-next-line react/prefer-stateless-function
class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    createMessage('467', 'J', this.state.value);
    this.setState({ value: '' });
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Send" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage }, dispatch
  );
}

export default connect('', mapDispatchToProps)(MessageForm);

