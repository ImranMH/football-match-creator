import api from '../api';
export const createMatch = (data) => {

  const newMatch = api.match.addMatch( data)

  return (dispatch) => {
    return newMatch.then(match => {
      console.log(match)
      dispatch({
        type: "ADD_NEW_MATCH",
        payload: match
      })
    })
  }
}