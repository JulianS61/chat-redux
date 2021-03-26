import React from 'react';
import ChannelList from './channelList';
import MessageList from './messageList';


const App = () => {
  return (
    <div className="app">
      <div className="server-side-nav">
        <div className="icon">LW</div>
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
