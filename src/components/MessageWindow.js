import React, {Component} from 'react';
import '../css/MessageWindow.css';
import Message from './Message.js';
import NoSelectUser from './NoSelectUser.js';
import NoMessage from './NoMessage.js';

class MessageWindow extends Component{

	parseIntString(n){
		return parseInt(n, 10);
	}

	render(){		

		let messagesRow = [];
		let userName = '';
		let userID = 0;

		let _thisUserID = this.parseIntString(this.props.thisUserID);			
		
		this.props.messages.forEach( (message) => {

			// get name user
			this.props.users.map( (el) => {
				if(message.userId === el.id){
					userName = el.userName;
					userID = el.id;
					return true;
				}
				return false;	
			} );

			// push in array
			let _userID = this.parseIntString(userID);
			let _toUserId = this.parseIntString(message.toUserId);
			let userIdFromMessage = this.parseIntString(message.userId);

			// get id select user
			// selected user
			let selectedUserId = 0;

			this.props.selectedUser.map( (selectedEl) => {
				if(selectedEl.idUser === _thisUserID){
					selectedUserId = selectedEl.selectUserId;
					return true;
				}
				return false;				
			} );

			// if no select interlocutor
			if(selectedUserId === 0){
				if(
					_thisUserID === _userID ||
					_thisUserID === _toUserId ||
					_thisUserID === userIdFromMessage
				){
					messagesRow = <NoSelectUser />
				}	

			// if select interlocutor
			} else{

				// Receive incoming messages
				if(
					_thisUserID === _toUserId && selectedUserId === userIdFromMessage
				){

					messagesRow.push(
						<Message key={message.id}
							userName={userName}
							dateMessage={message.date}
							timeMessage={message.time}
							message={message.message}
							userIdWithMessage={userID} // id user in message
							thisUserID={this.props.thisUserID}  // id user with router

						/>
					);

				// Receive outgoing messages
				} else if(
					_thisUserID === userIdFromMessage && selectedUserId === _toUserId
				){

					messagesRow.push(
						<Message key={message.id}
							userName={userName}
							dateMessage={message.date}
							timeMessage={message.time}
							message={message.message}
							userIdWithMessage={userID} // id user in message
							thisUserID={this.props.thisUserID}  // id user with router

						/>

					);

				}

			}
					
		} );

		// if there are no messages
		if(messagesRow.length === 0){
			messagesRow = <NoMessage />;
		}

		return(
			<div className="mx-message_window" id="mxMessageWindow">

				{messagesRow}

			</div>
		);
	}
}

export default MessageWindow;