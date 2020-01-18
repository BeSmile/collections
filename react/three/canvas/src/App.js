import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  initShaders,
} from './util';

var VSHADER_SOURCE =
  'attribute vec4 position;\n'+
  'void main() {'+
  'gl_Position = position;\n'+
  'gl_PointSize = 10.0;\n'+
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

    var position = gl.getAttribLocation(gl.program, 'position');
    console.log(position);
    if (position < 0) {
      console.log('cannot get');
      return;
    }
    // gl.vertexAttrib1f(position, 1.0);
    // gl.vertexAttrib2f(position, 1.0, 0.0);
    gl.vertexAttrib3f(position, 1.0, 0.0, 0.0);
    // gl.vertexAttrib4f(position, 1.0, 0.0, 0.0, 1);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.Points, 0, 1);
  }, [])
  return (
    <div className="App">
      <canvas id="webgl" width="400" height="400"/>
    </div>
  );
}

export default App;
