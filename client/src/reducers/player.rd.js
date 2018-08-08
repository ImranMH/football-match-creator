const initialState = {
  player:{},
  players: [],
  deletedPlayer:{}
}

const player = function (state = initialState, action = {}) {
  switch (action.type) {
    case 'ADD_PLAYER': {
      return { ...state, player:action.payload}
    }
    case 'All_PLAYER': {
      return { ...state, players: action.payload }
    }
    case 'GET_PLAYER_BY_ID': {
      return {...state, player:action.payload}
    }
    case 'EDIT_PLAYER': {
      return { ...state, player: action.payload }
    }
    case 'DELETE_PLAYER': {
      return { ...state, player:{}, deletedPlayer:action.payload }
    }
    default: return state;
  }
}

export default player