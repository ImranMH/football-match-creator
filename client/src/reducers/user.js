export default function (state = null, action) {
  switch (action.type) {
    case 'FETCH_USER': {
      return state = action.payload 
    }
    case 'ADD_USER': {
      return state = action.payload 
    }
    default: return state
  }
}





// export default function () {
//   return [
//     {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//       "phone": "1-770-736-8031 x56442",
//       "website": "hildegard.org",
//     },
//     {
//       "id": 2,
//       "name": "Ervin Howell",
//       "username": "Antonette",
//       "email": "Shanna@melissa.tv",
//       "phone": "010-692-6593 x09125",
//       "website": "anastasia.net",
//     },
//     {
//       "id": 3,
//       "name": "Clementine Bauch",
//       "username": "Samantha",
//       "email": "Nathan@yesenia.net",
//       "phone": "1-463-123-4447",
//       "website": "ramiro.info",
//     } 
//   ]
// } 