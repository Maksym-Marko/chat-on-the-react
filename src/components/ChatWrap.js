import React, {Component} from 'react';
import '../css/ChatWrap.css';

class ChatWrap extends Component{
	render(){
		return(
			<div className="mx-chat_wrap">
				{this.props.children}
			</div>
		);
	}
}

export default ChatWrap;