
const team = function(state = null, action={}) {
  switch(action.type) {
    case 'SHOW_TEAM_BYID': {
      return action.payload
    }
    case 'EDIT_ITEM': {
      return action.payload
    }
    case 'ADD_TEAM': {
      return action.payload
    }
    default: return state;
  }
}

export default team
