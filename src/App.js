import React, { Component } from 'react';
import ChatWrap from './components/ChatWrap.js';
import MessageWindow from './components/MessageWindow.js';

/*DATA*/
// users
import Users from './db/Users.js';

// messages
import UsersMessages from './db/UsersMessages.js';



class App extends Component {
  render() {
    return (
      <ChatWrap>
        <MessageWindow messages={UsersMessages} users={Users} />
      </ChatWrap>
    );
  }
}

export default App;
