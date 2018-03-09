
const groupTeam = function (state = null, action = {}) {
  switch (action.type) {
    case 'SEND_GROUP': {
      return action.data
    }
    default: return state;
  }
}

export default groupTeam
