import React from 'react';

import logo from './logo.svg';
import './App.css';

/*
  onRender的返回参数
*/
function onRenderCallback(
  id: string,
  phase: "mount" | "update",
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
  interactions: Array<{ name: string, timestamp: number }>,
): void {
  // Aggregate or log render timings...
}

function callback(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) {
  console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions);
}
function App() {
  return (
    <React.unstable_Profiler id="app" onRender={callback}>
      <div className="App">
        <React.unstable_Profiler id="header" onRender={callback}>
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
          </header>
        </React.unstable_Profiler>
      </div>
    </React.unstable_Profiler>
  );
}

export default App;
