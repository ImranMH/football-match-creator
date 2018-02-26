import React from 'react'

function UserList(props) {
  const user = props.user
  if(!user) {
    return (
      <div> Select a user to view Details </div>
    )
  }
  return (
    <div className="exp">
      <h2> User Details from Redux Store </h2>
      <div>
        <h2>{user.name}</h2>
        <strong>{user.phone}</strong>
        <div>{user.website}</div>
        <div>{user.username}</div>
        
        <a href={user.email}>{user.email}</a>
      </div>

    </div>
  )
}


export default UserList