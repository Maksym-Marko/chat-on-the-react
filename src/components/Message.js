import React, {Component} from 'react';
import '../css/Message.css';

class Message extends Component{

	render(){

		let classMyMessage = '';

		let userIdWithMessage = parseInt(this.props.userIdWithMessage);
		let thisUserID = parseInt(this.props.thisUserID);

		if(userIdWithMessage === thisUserID){
			classMyMessage = 'mx-my_message';
		}

		return(
			<div>
				<div className={'mx-message_wrap ' + classMyMessage}>
					<div className="mx-user">
						<div className="mx-user_name">
							{this.props.userName}
						</div>
						<div className="mx-date_wrap">
							<span className="mx-date">{this.props.dateMessage}</span><span className="mx-date_sep"> / </span><span className="mx-time">{this.props.timeMessage}</span>
						</div>
					</div>
					<div className="mx-message">
						{this.props.message}
					</div>
				</div>
				<div className="mx-clearfix"></div>
			</div>
		);
	}
}

export default Message;