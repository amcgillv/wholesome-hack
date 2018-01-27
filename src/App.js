import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserData from "./UserData";
import News from './News.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Wholesome News</h1>
        </header>
        <p className="App-intro">

        <br />
          <News />

        </p>
        <UserData />
      </div>
    );
  }
}

export default App;
