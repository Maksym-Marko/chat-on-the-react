import React, {Component} from 'react';
import '../css/MessageWindow.css';
import Message from './Message.js';

class MessageWindow extends Component{


	constructor(props){
		super(props);

		this.state = {messages: props.messages, users: props.users};
	}

	render(){

		let messagesRow = [];
		let userName = '';

		this.state.messages.forEach( (message) => {

			// get name user
			this.state.users.map( (el) => {
				if(message.userId === el.id){
					userName = el.userName;
				}				
			} );

			// push in array
			messagesRow.push(
				<Message key={message.id}
					userName={userName}
					dateMessage={message.date}
					timeMessage={message.time}
					message={message.message}

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