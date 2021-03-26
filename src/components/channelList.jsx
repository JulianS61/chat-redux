import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// eslint-disable-next-line react/prefer-stateless-function
class ChannelList extends Component {
  render() {
    return (
      <div className="channel-list-nav">
        <h2>Redux Chat</h2>
        <ul>
          <li><FontAwesomeIcon icon={['fab', 'slack-hash']} /> ch1</li>
          <li><FontAwesomeIcon icon={['fab', 'slack-hash']} /> ch2</li>
          <li><FontAwesomeIcon icon={['fab', 'slack-hash']} /> ch3</li>
        </ul>
      </div>
    );
  }
}

export default ChannelList;
