export default function (state = null, action) {
  switch (action.type) {
    case 'SELECT_USER': {
      return action.payload;
    }   
    default : return state
  }
 
}

