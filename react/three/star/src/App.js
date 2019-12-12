import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';

function init() {
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 1;
  camera.rotation.x = Math.PI / 2;

  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);


  let starGeo = new THREE.Geometry();//创建骨架

  for(let i=0;i<6000;i++) {
    let star = new THREE.Vector3(
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
      Math.random() * 600 - 300
    );
    star.velocity = 0;
    star.acceleration = 0.02;
    starGeo.vertices.push(star);
  }

  let sprite = new THREE.TextureLoader().load( './star.png' );
  let starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.7,
    map: sprite
  });

  let stars = new THREE.Points(starGeo, starMaterial);
  scene.add(stars);

  animate();

  function animate() {
    starGeo.vertices.forEach(p => {
      p.velocity += p.acceleration
      p.y -= p.velocity;

      if (p.y < -200) {
        p.y = 200;
        p.velocity = 0;
      }
    });
    starGeo.verticesNeedUpdate = true;
    stars.rotation.y +=0.002;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
}

function App() {
  init();
  return (
    <></>
  );
}

export default App;
