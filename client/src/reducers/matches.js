const initialState = {
  matches : [],
  match: {}
}
const matches = function (state = initialState, action = {}) {
  switch (action.type) {
    case 'ADD_NEW_MATCH': {
      return { ...state, match: action.payload, matches: [...state.matches,action.payload]}
    }
    case 'SHOW_ALL_MATCH': {
      return { ...state, matches: action.payload}
    }
    case 'UPDATE_MATCH': {
      return { ...state, matches: action.payload }
    }
    default: return state;
  }
}

export default matches