import React, {Component} from 'react';

class FormBlock extends Component{

	handleSubmit(e){	

		let _message = document.getElementById('mxForm').value;
		_message.trim();

		if(_message !== ''){
			let _fromUserID = this.props.thisUserID;
			this.props.handleSubmitParent(_message, _fromUserID);
		}		

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