import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class ChannelList extends Component {
  render() {
    return (
      <div className="channel-list-nav">
        <h2>Title</h2>
        <ul>
          <li>#ch1</li>
          <li>#ch2</li>
          <li>#ch3</li>
        </ul>
      </div>
    );
  }
}

export default ChannelList;
