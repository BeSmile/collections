/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-11-05 11:22:58
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-11-05 14:07:00
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import LayoutContainer from './LayoutContainer';

function App({ children }) {
  return (
    <Router>
      { children }
    </Router>
  );
}

ReactDOM.render(
  <App>
    <LayoutContainer/>
  </App>,
  document.getElementById('root')
);

reportWebVitals();