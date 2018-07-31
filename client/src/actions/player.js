import api from '../api';

export const addPlayer = (player) => {
  var items = api.player.addPlayer(player)
  return (dispatch) => {
    return items.then(player => {
      dispatch({
        type: "ADD_PLAYER",
        payload: player.data
      })
    })
  }
}

export const allPayer = () => {
  var items = api.player.allPlayer()
  return (dispatch) => {
    return items.then(player => {
      console.log(player);
      dispatch({
        type: "All_PLAYER",
        payload: player.data
      })
    })
  }
}