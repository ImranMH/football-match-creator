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
export const editedPlayer = (player) => {
  console.log(player);
  var items = api.player.editPlayer(player)
  return (dispatch) => {
    return items.then(player => {
      dispatch({
        type: "EDIT_PLAYER",
        payload: player.data
      })
    })
  }
}
export const deleteById = (id) => {
  var items = api.player.deleteById(id)
  return (dispatch) => {
    return items.then(player => {
      console.log(player);
      dispatch({
        type: "DELETE_PLAYER",
        payload: player.data
      })
    })
  }
}
export const getPlayerById = (player) => {
  var items = api.player.getPlayerById(player)
  return (dispatch) => {
    return items.then(response => {
      dispatch({
        type: "GET_PLAYER_BY_ID",
        payload: response.data
      })
    })
  }
}

export const allPayer = () => {
  var items = api.player.allPlayer()
  return (dispatch) => {
    return items.then(player => {
      dispatch({
        type: "All_PLAYER",
        payload: player.data
      })
    })
  }
}