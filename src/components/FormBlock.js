import React, {Component} from 'react';
import '../css/FormBlock.css';

class FormBlock extends Component{

	handleSubmit(e){	

		let _message = document.getElementById('mxForm').value;
		_message.trim();

		// from user
		let _fromUserID = this.props.thisUserID;
		_fromUserID = parseInt(_fromUserID, 10);

		// to user
		let _toUserId = 0;
		this.props.selectedUser.map( (toUserEl) => {
			if(_fromUserID === toUserEl.idUser){
				_toUserId = toUserEl.selectUserId;
				return true;
			}
			return false;		
		} );

		if(_message !== ''){			
			this.props.handleSubmitParent(_message, _fromUserID, _toUserId);
		}		

		// clear textarea
		document.getElementById('mxForm').value = '';

		// scroll to bottom
		setTimeout( () => {
			document.getElementById('mxMessageWindow').scrollTop = document.getElementById('mxMessageWindow').scrollHeight;
		}, 500 );
				
		e.preventDefault();
		
	}

	render(){
		
		return(
			<div className="mx-form_block">

				<form onSubmit={this.handleSubmit.bind(this)}>
					<textarea id="mxForm"></textarea>
					<button type="submit">Отправить</button>
				</form>

			</div>
		);
	}
}

export default FormBlock;