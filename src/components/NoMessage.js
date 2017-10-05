import React, {Component} from 'react';
import '../css/NoSelectUser.css';

class NoSelectUser extends Component{

	render(){
		return(
			<div className="mx-no_select_user_wrap">
				<h1>Отсутствует переписка</h1>
				<h2>Напишите первое письмо</h2>
				<i className="fa fa-smile-o" aria-hidden="true"></i>
			</div>
		);
	}

}

export default NoSelectUser;