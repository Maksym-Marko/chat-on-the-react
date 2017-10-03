import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*DATA*/
// users
import Users from './db/Users.js';

// messages
import UsersMessages from './db/UsersMessages.js';


ReactDOM.render(<App messages={UsersMessages} users={Users} />, document.getElementById('root'));
registerServiceWorker();
