const initialState = {
  matches : [],
  filteredMatch:[],
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
    case 'DELETE_MATCH': {

      return { ...state, matches: action.payload  }
    }
    case 'EDIT_MATCH': {

      return { ...state, matches: action.payload  }
    }
    case 'SHOW_ALL_FILTERED_MATCH': {

      return { ...state, filteredMatch: action.payload  }
    }
    default: return state;
  }
}

export default matches