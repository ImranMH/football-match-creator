import userss from '../data';

export const addUser = user => {
 let users = userss()

  users.push(user)
  console.log("addedUser: ", users)
  return {
    type: 'ADD_USER',
    payload: users
  }
}