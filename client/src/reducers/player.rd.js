const player = function (state = {}, action = {}) {
  switch (action.type) {
    case 'ADD_PLAYER': {
      return action.payload
    }
    case 'All_PLAYER': {
      return action.payload
    }
    // case 'ADD_TEAM': {
    //   return action.payload
    // }
    default: return state;
  }
}

export default player