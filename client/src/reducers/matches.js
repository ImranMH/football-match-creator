const matches = function (state = null, action = {}) {
  switch (action.type) {
    case 'SHOW_ALL_MATCH': {
      return action.payload
    }
    default: return state;
  }
}

export default matches