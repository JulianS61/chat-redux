import React from 'react';
// FontAwesomeIcons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import ChannelList from './channelList';
import MessageList from '../containers/messageList';

// FontAwesomeIcons
library.add(fab);

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
