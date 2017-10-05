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
		this.handleSelectedUser = this.handleSelectedUser.bind(this);

		this.state = {
			messages: props.messages,
			users: props.users,
			selectedUser: null
		};
	}

	componentWillMount(){
		let users = this.state.users;
		let arrSelects = [];
		users.map( (el) => {			
			arrSelects.push({
				idUser: el.id, // user id 'John'
				selectUserId: 0, // user 'John' selected user id from list
				selectUserName: 'Собеседник не выбран'
			});
			return true;
		} );
		this.setState({selectedUser: arrSelects});
		
	}

	getDateSend(){
		let today = new Date();
		return today.toISOString().substring(0, 10);		
	}

	getTimeSend(){
		let today = new Date();
		let thisTime = today.toTimeString();
		thisTime = thisTime.split(' ')[0];
		return thisTime;
	}

	handleSubmitMessage(_message, _fromUserID, _toUserId){

		let arrayMessage = this.state.messages;

		let IDmessage = arrayMessage.length+1;

		let fromUserID = parseInt(_fromUserID, 10);

		arrayMessage.push({
		    id: IDmessage,
		    userId: fromUserID,
		    message: _message,
		    toUserId: _toUserId,
		    date: this.getDateSend(),
		    time: this.getTimeSend()
	 	});

		this.setState({
			messages: arrayMessage 
		});

	}

	handleSelectedUser(_thisUser, _valueSelect, _idSelectedUser){

		let arrSelectedUser = this.state.selectedUser;

		arrSelectedUser.map( (el) => {
			if(_thisUser === el.idUser){
				el.selectUserId = _idSelectedUser;
				el.selectUserName = _valueSelect;
				return true;				
			}
			return false;
		} );

		this.setState({
			selectedUser: arrSelectedUser 
		});

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
			                	selectedUser={this.state.selectedUser} // selected users
			                	handleSelectUserListParent={this.handleSelectedUser} // change select users
			                /> }
				        />
		            </Switch>
					
				</div>
			</Router>
		);
	}
}

export default App;
