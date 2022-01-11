/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-11-05 14:08:24
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-11-05 15:58:20
 */
import logo from './logo.svg';
import './App.css';

function App(props) {
  window.env = 'about';
  console.log(props, 'App About props');
  return (
    <div className=" micro-frontend-about App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Reload About Page
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
