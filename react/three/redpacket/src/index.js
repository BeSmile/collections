import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Test = () => {
  let [count, setCount ] = useState(0);
  setTimeout(() => {
    setCount(++count);
  }, 3000)
  return (
    <App type = {count}/>
  )
}

ReactDOM.render(<Test/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
