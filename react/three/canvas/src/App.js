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
var g_points = [];

function click(ev, gl, canvas, position) {
  var x = ev.clientX;
  var y = ev.clientY;

  var rect = ev.target.getBoundingClientRect();
  x = ((x - rect.left) - canvas.height/2) / (canvas.height /2);
  y = (canvas.width/2 - (y - rect.top)) / (canvas.width /2);
  g_points.push(x);
  g_points.push(y);

  gl.clear(gl.COLOR_BUFFER_BIT);

  for (var i = 0; i < g_points.length; i+=2) {
    gl.vertexAttrib3f(position, g_points[i], g_points[i+1], 0.0);
    gl.drawArrays(gl.POINTS, 0, 1);
  }
}

function App() {
  useEffect(function() {
    var canvas = document.getElementById('webgl');
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

    canvas.onmousedown = function(ev) {
      click(ev, gl, canvas, position)
    }
  }, [])
  return (
    <div className="App">
      <canvas id="webgl" width="400" height="400"/>
    </div>
  );
}

export default App;
