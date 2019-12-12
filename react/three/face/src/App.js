import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';

function init() {
  let scene = new THREE.Scene();

  let camera = new THREE.PerspectiveCamera(60, window.innerWidth/ window.innerHeight, 0.1, 1000);

  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  let normal = new THREE.Vector3(0, 1, 0);
  let color = new THREE.Color(0xffaa00);
  var geometry = new THREE.Geometry();

  // Array.from(new Array(10)).map((item) => {
  //    geometry.vertices.push(
  //      new THREE.Vector3(
  //        Math.random() * 400 -200,
  //        Math.random() * 500 - 250,
  //        Math.random() * 400 - 200
  //     )
  //    )
  // })

  geometry.vertices.push(
  	new THREE.Vector3( 10,  10, 0 ),
  	new THREE.Vector3( 0, 10, 0 ),
  	new THREE.Vector3(  0, 0, 0 ),
  	// new THREE.Vector3(  10, 0, 0 ),
   //  new THREE.Vector3(
   //    Math.random() * 600 - 300,
   //    Math.random() * 600 - 300,
   //    Math.random() * 600 - 300
   // )
  );

  geometry.faces.push( new THREE.Face3( 0, 1, 2 ) )
  // geometry.faces.push( new THREE.Face3( 0, 2, 3 ) );

  geometry.computeBoundingSphere();

  let material = new THREE.MeshBasicMaterial({
    color: '0xffaa00',
  })

  let mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(1, 1 ,1);
  scene.add(mesh);

  camera.position.x = 40;
  camera.position.y = 40;
  camera.position.z = 10;
  camera.rotation.x = 0;
  // camera.rotation.y = -0.12;
  camera.rotation.z = 0;
  camera.lookAt(0,0,0);
  // camera.position.z = 1;
  // camera.rotation.x = Math.PI / 2;

  function animate() {
    // geometry.vertices.forEach(p => {
    //   // console.log(p);
    //   p.velocity += -.02
    //   p.y += 0.1;
    //
    //   if (p.z < -200) {
    //     p.z = 200;
    //     p.velocity = 0;
    //   }
    // })
    // points.rotation.y += 0.02;
    // points.verticesNeedUpdate = true;

    renderer.render(scene, camera);
    // requestAnimationFrame(animate);
  }
  animate();
}

function App() {
  init();
  return (
    <></>
  );
}

export default App;
