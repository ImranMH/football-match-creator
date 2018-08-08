

export default function (state = null, action) {
  switch (action.type) {
    case 'ADD_USER': {
      return action.payload;
    }
    default: return state
  }

}