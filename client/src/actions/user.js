import usersss from '../data'
export const user = () => {
  const users = usersss()
  return {
    type: 'FETCH_USER',
    payload: users
  }
}