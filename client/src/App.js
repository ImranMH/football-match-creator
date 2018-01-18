import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleClick = () => {
    fetch('/apis/test').then(res => res.json()).then(data=> console.log(data))
    
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
          <img src={logo} className="App-logo" alt="logo" />
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
