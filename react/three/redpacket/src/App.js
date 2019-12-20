import React, { useEffect, }  from 'react';
import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';
import { Stats } from 'three-stats';
import _ from 'lodash';

function init() {
  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;
  const width = innerWidth / 2 ;

  const height = innerHeight / 2;
  var stats = initStats();
  var scene = new THREE.Scene();

  var axisHelper = new THREE.AxesHelper( 10e3 );
  scene.add( axisHelper );
  let camera = new THREE.OrthographicCamera(-width, width, height, -height, 1, 1000);
  var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.setPixelRatio(window.devicePixelRatio)

  var geometry = new THREE.Geometry();

  for(let i = 0; i < 50; i++) {
    geometry.vertices.push(
      new THREE.Vector3( _.random(-width, width),  _.random(-height, height), 0 ),
    )
  }
  // geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );

  geometry.computeBoundingSphere();
  let material = new THREE.MeshLambertMaterial({
    color: 0x000000,
  })
  let mesh = new THREE.Mesh(geometry, material);

  let cube = new THREE.Mesh(new THREE.CubeGeometry(100,100,10), new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe:true,
  }))

  let sprite = new THREE.TextureLoader().load( './smoke.png' );

  let pointsMaterial = new THREE.PointsMaterial({
    color: 0x000000,
    size: 120,
    map: sprite,
    transparent: true
  })

  let points = new THREE.Points(geometry, pointsMaterial);

  var raycaster = new THREE.Raycaster();//光线投射，用于确定鼠标点击位置

  var mouse = new THREE.Vector2();//创建二维平面
  window.addEventListener("mousedown",mousedown);//页面绑定鼠标点击事件
  //点击方法
  function mousedown(e){
      //将html坐标系转化为webgl坐标系，并确定鼠标点击位置
      mouse.x =  e.clientX / renderer.domElement.clientWidth*2-1;
      mouse.y =  -(e.clientY / renderer.domElement.clientHeight*2)+1;
      console.log(mouse);
      //以camera为z坐标，确定所点击物体的3D空间位置
      raycaster.setFromCamera(mouse,camera);
      //确定所点击位置上的物体数量
      console.log(scene.children);
      var intersects = raycaster.intersectObjects(scene.children);
      //选中后进行的操作
      if(intersects.length){
          alert(intersects.length)
      }
  }

  // scene.add(cube);
  // scene.add(mesh);
  scene.add(points);

  camera.position.set(0, 0, 1)

  document.body.appendChild(renderer.domElement);
  function animate() {
    stats.update();
    geometry.vertices.forEach(p => {
      p.y -= 1.2;
      // console.log(p.y);
      if(p.y <= -height) {
        p.y = height;
      }
    })
    geometry.verticesNeedUpdate = true;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
}
function initStats() {
    var stats = new Stats();

    //设置统计模式
    stats.setMode(0); // 0: fps, 1: ms
    //统计信息显示在左上角
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    //将统计对象添加到对应的<div>元素中
    document.getElementById("Stats-output").appendChild(stats.domElement);
    return stats;
}
function App() {
  init();

  return (
    <></>
  );
}

export default App;
