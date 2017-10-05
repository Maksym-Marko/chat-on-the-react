import React, {Component} from 'react';
import '../css/NoSelectUser.css';

class NoSelectUser extends Component{

	render(){
		return(
			<div className="mx-no_select_user_wrap">
				<h1>Не выбран собеседник</h1>
				<h2>Выберите пользователя из списка ниже</h2>
				<i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
			</div>
		);
	}

}

export default NoSelectUser;