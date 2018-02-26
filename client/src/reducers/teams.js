import { BARE_TEAM_ADDED } from '../types'

const teams = function (state = null, action = {}) {
  switch (action.type) {
    case BARE_TEAM_ADDED: {
      return action.team
    }
    case 'SHOW_TEAMS': {
      return action.payload
    }
    case 'DELETE_TEAM': {
      return state
    }
    default: return state;
  }
}

export default teams