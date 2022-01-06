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

var FSHADER_SOURCE =
  'precision mediump float;'+
  'uniform vec4 u_FragColor;\n' + // uniform变量
  'void main() {'+
  'gl_FragColor = u_FragColor;\n'+
'}';
var g_points = [];
var g_colors = [];

function click(ev, gl, canvas, position, color) {
  var x = ev.clientX;
  var y = ev.clientY;

  var rect = ev.target.getBoundingClientRect();
  x = ((x - rect.left) - canvas.height/2) / (canvas.height /2);
  y = (canvas.width/2 - (y - rect.top)) / (canvas.width /2);
  g_points.push([x, y]);

  if (x >= 0.0 && y >= 0.0) {
    g_colors.push([1.0, 0.0, 0.0, 1.0])
  } else if(x < 0.0 && y < 0.0) {
    g_colors.push([0.0, 1.0, 0.0, 1.0]);
  } else {
    g_colors.push([1.0, 1.0, 1.0, 1.0]);
  }
  gl.clear(gl.COLOR_BUFFER_BIT);

  for (var i = 0; i < g_points.length; i++) {
    const xy = g_points[i];
    const rgba = g_colors[i];
    gl.vertexAttrib3f(position, xy[0], xy[1], 0.0);
    gl.uniform4f(color, rgba[0], rgba[1], rgba[2], rgba[3]);
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


    var color = gl.getUniformLocation(gl.program, 'u_FragColor');
    if (color < 0) {
      console.log('cannot get color');
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
      click(ev, gl, canvas, position, color)
    }
  }, [])
  return (
    <div className="App">
      <canvas id="webgl" width="400" height="400"/>
    </div>
  );
}

export default App;
