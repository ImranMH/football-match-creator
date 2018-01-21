import React, { Component } from 'react'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import './App.css'
const initialState = {
  fetching: false,
  fetched : false,
  error : null,
  user: [],
  players: [],
  team: []
}
//reducer except: state, action ; return : new State
const teamReducer = function(state = {}, action) {
  switch(action.type) {
    case "title" : {
       state = { ...state, title: action.payload }
      break;
    }
    case "continent" : {
       state = { ...state, continent : action.payload }
      break;
    }
  }
  return state
}
const playerReducer = function(state = {}, action) {
  //const newState = {...state}
  switch(action.type) {
    case "name" : {
       state = { ...state, name : action.payload }
      break;
    }
    case "country" : {
        state = { ...state, country : action.payload }
      break;
    }
     case "rrr" : {
        throw new Error('omg11111')
      break;
    }
  }
  //  if(action.type ==="minus") {
  //   state = state - action.payload;
  // }
  return state
}
const userReducer = function(state = {}, action) {
  switch(action.type) {
    case "FETCH_USER_START" : {
      return { ...state, fetching : true }
      break;
    }
    case "RECEIVE_USERS" : {
       return { ...state, fetching : false, fetched: true, user: action.payload }
      break;
    }
    case "RECEIVE_USERS_ERROR" : {
       return { ...state ,error : action.payload, fetching:false }
      break;
    }
  }
  return state
}
const reducer = combineReducers({
  players: playerReducer,
  team: teamReducer,
  user: userReducer,
})
/*const error = (store) => (next) => (action) =>{
  try{
    next(action)
  } catch(e){
    console.log('error please ');
  }
  action.type = "country"
  next(action)
}*/
// const logger = (store) => (next) => (action) =>{
//   console.log('middleware function call', action);
//   action.type = "country"
//   next(action)
// }
const middleware = applyMiddleware(logger, ReduxThunk)
const store = createStore(reducer, {}, middleware)
store.subscribe(() => {
  console.log("store changed", store.getState());
})
// store.dispatch({type:"name", payload:"imran"})
// store.dispatch({type:"continent", payload:"Africa"})
store.dispatch((dispatch)=> {
  dispatch({type:'FETCH_USER_START'})
  fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json()).then(response=> {
    dispatch({type: 'RECEIVE_USERS', payload: response})
  }).catch(error => {
    dispatch({type: 'RECEIVE_USERS_ERROR', payload: error})
  })
})






class App extends Component {
  handleClick = () => {
    fetch('/api/team/read').then(res => res.json()).then(data=> console.log(data))
    
    console.log('obj');
  };
  sendData = () => {
    console.log('post');
    var url = 'apis/test';
    var data = {username: 'example'};
    console.log(data);
    fetch(url, {
      method: 'post', // or 'PUT'
      body: JSON.stringify(data), 
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.handleClick}>click me</button>
        <button onClick={this.sendData}>send me</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
