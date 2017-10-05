import React, {Component} from 'react';
import '../css/SelectUser.css';

class SelectUser extends Component{

	handleSelectUserList(e){
		let elSelect = document.getElementById('mxSelect');

		let valueSelect = '';
		let idSelectedUser = 0;

		for(let i=0; i < elSelect.options.length; i++){
			if(elSelect.options[i].selected === true){

				valueSelect = elSelect.options[i].value;
				idSelectedUser = elSelect.options[i].id;
				idSelectedUser = parseInt(idSelectedUser, 10);

			}			
		}

		let thisUser = this.props.thisUserID;
		thisUser = parseInt(thisUser, 10);

		this.props.handleSelectUserListParent(thisUser, valueSelect, idSelectedUser);

		// scroll to bottom
		setTimeout( () => {
			document.getElementById('mxMessageWindow').scrollTop = document.getElementById('mxMessageWindow').scrollHeight;
		}, 500 );
		
	}

	render(){

		let allUsers = this.props.users;
		let activeUser = this.props.thisUserID;
		activeUser = parseInt(activeUser, 10);

		// get select user from state
		let valueSelectedUser = '';
		this.props.selectedUser.map( (el) => {
			if(activeUser === el.idUser){
				valueSelectedUser = el.selectUserName;
				return true;
			}			
			return false;
		} );

		// list users
		let selectUser = [];
		selectUser.push(
			<option key="0" id="0" value="Собеседник не выбран">Собеседник не выбран</option>
		);

		allUsers.forEach( (user) =>{
			
			let userID = parseInt(user.id, 10);			

			if(userID !== activeUser){
				selectUser.push(
					<option key={user.id} id={user.id} value={user.userName}>{user.userName}</option>
				);
			}

		} );

		return(
			<select className="mx-select" id="mxSelect" onChange={this.handleSelectUserList.bind(this)}>
				{selectUser}
			</select>
		);
	}
}

export default SelectUser;