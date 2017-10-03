import React, {Component} from 'react';
import '../css/ChatWrap.css';

import MessageWindow from './MessageWindow.js';
import FormBlock from './FormBlock.js';

class ChatWrap extends Component{

	

	render(){

		let userId = this.props.match.params.id;

		//console.log(this.props.match.params.id);

		return(
			<div className="mx-chat_wrap">
				<MessageWindow
					messages={this.props.messages}
					users={this.props.users}
					thisUserID={userId}
				/>					
				<FormBlock
					handleSubmitParent={this.props.handleSubmitParent}
					thisUserID={userId}
				/>
			</div>
		);
	}
}

export default ChatWrap;