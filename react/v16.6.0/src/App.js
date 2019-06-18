import React from 'react';
import logo from './logo.svg';
import './App.css';
import Memo from './memo/index';
import Lazy from './lazy/index';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Memo/>
        <Lazy/>
      </header>
    </div>
  );
}

export default App;
