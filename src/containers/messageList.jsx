import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Message from '../components/message';
import MessageForm from '../containers/messageForm';
import { fetchMessages } from '../actions';


// eslint-disable-next-line react/prefer-stateless-function
class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = { interval: null };
  }
  componentWillMount() {
    this.props.fetchMessages('467');
  }

  // componentDidMount() {
  //   const interval = setInterval(() => { this.props.fetchMessages('467'); }
  //     , 1000);
  //   // eslint-disable-next-line react/no-did-mount-set-state
  //   this.setState({ interval });
  // }

  // componentWillUnmount() {
  //   clearInterval(this.state.interval);
  // }

  render() {
    const { messages } = this.props;
    return (
      <div className="message-list">
        <div>
          <h2><FontAwesomeIcon icon={['fab', 'slack-hash']} /> ch1</h2>
          <hr />
        </div>
        <div>
          <div className="scroll">
            {messages.map(message => <Message key={message.id} message={message} />)}
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
