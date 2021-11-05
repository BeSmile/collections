/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-11-05 12:08:06
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-11-05 14:09:19
 */
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
console.log(document.getElementById('container'), 'about');
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter: () => document.getElementById('container')?document.getElementById('container'):document.getElementById('root'),
  rootComponent: App,
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;
