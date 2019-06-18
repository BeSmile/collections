import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputRef from './createRef/index';
import { CreateReactContext, ToggleButton } from './createReactContext/index';
import { ForwardRef, ForwardButton, HocForward } from './forwardRef/index';
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
        <InputRef/>
        <CreateReactContext/>
        <ToggleButton/>
      <br/>
    ---------------------------
        <ForwardRef/>
      ------------------
        <ForwardButton/>
      ------------------
        <HocForward>dsf</HocForward>
      </header>
    </div>
  );
}

export default App;
