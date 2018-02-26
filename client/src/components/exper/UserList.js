import React from 'react'

import './label.css'
function UserList(props) {
	const userlist = props.users.map(user=>
		<li key={user.id}>
			<h2 onClick={(() => props.userAction(user))} >{user.name} </h2>
			<a href={user.email}>{user.email} </a>
			<div>{user.phone} </div>
		</li>
	)
	return(
		<div className="exp2">
			<h2> UserList from Redux Store </h2>
			<ul>
				{userlist}
			</ul>

		</div>
	)
}


export default UserList




