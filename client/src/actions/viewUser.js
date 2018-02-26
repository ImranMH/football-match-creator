export const viewUser = user => {
  return {
    type: 'SELECT_USER',
    payload: user
  }
}