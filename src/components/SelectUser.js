import React, {Component} from 'react';

class SelectUser extends Component{

	handleSelectUserList(e){
		let elSelect = document.getElementById('mxSelect');

		let valueSelect = '';
		let idSelectedUser = 0;

		for(let i=0; i < elSelect.options.length; i++){
			if(elSelect.options[i].selected === true){
				//console.log(elSelect.options[i].id);

				valueSelect = elSelect.options[i].value;
				idSelectedUser = elSelect.options[i].id;
				idSelectedUser = parseInt(idSelectedUser, 10);

			}			
		}

		let thisUser = this.props.thisUserID;
		thisUser = parseInt(thisUser, 10);

		this.props.handleSelectUserListParent(thisUser, valueSelect, idSelectedUser);
		
	}

	render(){

		let allUsers = this.props.users;
		let activeUser = this.props.thisUserID;
		activeUser = parseInt(activeUser, 10);

		// get select user from state
		let valueSelectedUser = '';
		//let idSelectedUser = 0;
		this.props.selectedUser.map( (el) => {
			if(activeUser === el.idUser){
				valueSelectedUser = el.selectUserName;
				//idSelectedUser = el.selectUserId;
				//console.log(el);
				return true;
			}			
			return false;
		} );
		

		// list users
		let selectUser = [];

		allUsers.forEach( (user) =>{
			
			let userID = parseInt(user.id, 10);			

			if(userID !== activeUser){
				selectUser.push(
					<option key={user.id} id={user.id} value={user.userName}>{user.userName}</option>
				);
			}

		} );

		//console.log(activeUser);
		return(
			<select value="{valueSelectedUser}" id="mxSelect" onChange={this.handleSelectUserList.bind(this)}>
				<option>{valueSelectedUser}</option>
				{selectUser}
			</select>
		);
	}
}

export default SelectUser;