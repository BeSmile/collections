import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  initShaders,
} from './util';

var VSHADER_SOURCE = 'void main() {'+
  'gl_Position = vec4(0.0, 0.0, 0.0, 1.0);'+
  'gl_PointSize = 10.0;'+
'}';

var FSHADER_SOURCE = 'void main() {'+
  'gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);'+
'}';


function App() {
  useEffect(function() {
    var canvas = document.getElementById('webgl');
    console.log(canvas, 222);
    var gl = canvas.getContext('webgl', { antialias: false, depth: false });

    if (!gl) {
      console.log('浏览器不支持');
      return
    }
    if(!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
      console.log('failed');
      return
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.Points, 0, 3);
  }, [])
  return (
    <div className="App">
      <canvas id="webgl" width="400" height="400"/>
    </div>
  );
}

export default App;
