/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-11-05 12:08:06
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-11-05 14:16:46
 */
import logo from './logo.svg';
import './App.css';

function App() {
  window.env = 'home';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Reload Home Page
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
    </div>
  );
}

export default App;
