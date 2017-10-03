import React, {Component} from 'react';
import '../css/MessageWindow.css';
import Message from './Message.js';

class MessageWindow extends Component{

	render(){		

		let messagesRow = [];
		let userName = '';
		let userID = 0;

		this.props.messages.forEach( (message) => {

			// get name user
			this.props.users.map( (el) => {
				if(message.userId === el.id){
					userName = el.userName;
					userID = el.id;
				}				
			} );

			// push in array
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
		} );
		return(
			<div className="mx-message_window">

				{messagesRow}

			</div>
		);
	}
}

export default MessageWindow;