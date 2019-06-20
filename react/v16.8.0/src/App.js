import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import StateComponent from './state';
import ContextComponent from './context';
import EffectComponent from './effects';

function App() {
  const [ name, setName1 ] = useState("");

  console.log(name);

  setTimeout(function() {
    setName1("4444")
  }, 1000);
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
          Learn React {name}
        </a>
        <StateComponent/>
        <ContextComponent/>
        <EffectComponent/>
      </header>
    </div>
  );
}

export default App;
