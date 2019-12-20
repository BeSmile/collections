import * as THREE from 'three';

export default function init() {
  let scene = new THREE.Scene();// 创建场景

  let camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 500);// 创建相机
  camera.position.set(0, 0, 500); // 相机点
  camera.lookAt(0, 0, 0);

  let renderer = new THREE.WebGLRenderer(); // 创建渲染器
  renderer.setSize(window.innerWidth, window.innerHeight); // 设置大小
  document.body.appendChild(renderer.domElement);

  var material = new THREE.LineBasicMaterial({ color: 0x0000ff }); // 创建材质
  var geometry = new THREE.Geometry();// 创建骨架
  geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, 10, 0));
  geometry.vertices.push(new THREE.Vector3(10, 0, 0));
  var line = new THREE.Line(geometry, material);// 根据材质和骨架画线
  scene.add(line);

  renderer.render(scene, camera); // 渲染
}
