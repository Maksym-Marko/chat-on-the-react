import React, {Component} from 'react';
import '../css/ChatWrap.css';

import MessageWindow from './MessageWindow.js';
import FormBlock from './FormBlock.js';
import SelectUser from './SelectUser.js';

class ChatWrap extends Component{	

	render(){

		let userId = this.props.match.params.id;

		return(
			<div className="mx-chat_wrap">
				<MessageWindow
					messages={this.props.messages}
					users={this.props.users}
					thisUserID={userId}
					selectedUser={this.props.selectedUser}
				/>
				<SelectUser
					users={this.props.users}
					thisUserID={userId}
					selectedUser={this.props.selectedUser}
					handleSelectUserListParent={this.props.handleSelectUserListParent}
				/>
				<FormBlock
					handleSubmitParent={this.props.handleSubmitParent}
					thisUserID={userId}
					selectedUser={this.props.selectedUser}
				/>
			</div>
		);
	}
}

export default ChatWrap;