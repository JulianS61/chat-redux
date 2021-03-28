import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Message from '../components/message';
import MessageForm from '../components/messageForm';
import fetchMessages from '../actions';


// eslint-disable-next-line react/prefer-stateless-function
class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages('General');
  }

  render() {
    const { messages } = this.props;
    console.log(this.props);

    return (
      <div className="message-list">
        <div>
          <h2><FontAwesomeIcon icon={['fab', 'slack-hash']} /> ch1</h2>
          <hr />
        </div>
        <div>
          <div>
            {messages.map(message => <Message key={message.created_at} message={message} />)}
          </div>
          <hr />
          <MessageForm />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages }, dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
