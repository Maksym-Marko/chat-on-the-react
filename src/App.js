import React, { Component } from 'react';
import ChatWrap from './components/ChatWrap.js';

// Router
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {

	constructor(props){
		super(props);

		this.handleSubmitMessage = this.handleSubmitMessage.bind(this);

		this.state = {
			messages: props.messages,
			users: props.users
		};
	}

	handleSubmitMessage(_message, _fromUserID){

		let arrayMessage = this.state.messages;

		let IDmessage = arrayMessage.length+1;

		let fromUserID = parseInt(_fromUserID);

		console.log(IDmessage);

		arrayMessage.push({
		    id: IDmessage,
		    userId: fromUserID,
		    message: _message,
		    toUserId: 1,
		    date: '25.09.2017',
		    time: '15:33'
	 	});

		this.setState({
			messages: arrayMessage 
		});

		//console.log(this.state);

	}

	render() {

		let arrUsers = [];

		this.state.users.forEach( (user) => {
			arrUsers.push(
				{id: user.id, userName: user.userName}
			);
		} )

		return (
			<Router>
				<div>
					<ul>
						{arrUsers.map((el)=>
							<li key={el.id}><Link to={'/user/'+el.id}>{el.userName}</Link></li>						
						)}
					</ul>

					<Switch>
		                <Route path="/user/:id" render={props =>

		                	<ChatWrap
	                			{...props}	                			
			                	messages={this.state.messages}
			                	users={this.state.users}
			                	handleSubmitParent={this.handleSubmitMessage}
			                /> }
				        />
		            </Switch>
					
				</div>
			</Router>
		);
	}
}

export default App;
