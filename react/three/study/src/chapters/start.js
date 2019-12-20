import * as THREE from 'three';

export default function init(): void {
  // 1. 初始化场景
  let scene = new THREE.Scene();

  // 2. 初始化相机
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  scene.add(camera);

  //渲染器
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  //创建立方体骨架
  let geometry = new THREE.BoxGeometry(1, 1, 1);// 创建立方体 盒子模型
  let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); // 创建材质包

  let cube = new THREE.Mesh( geometry, material );
  scene.add(cube);

  // camera.position.z = 5;
  camera.rotation.z += 0.1;// 旋转

  var animate = function(): void {
    requestAnimationFrame( animate );

    // cube.position.x += 0.01;
    // cube.position.y += 0.01;
    // camera.rotation.z += 0.1;
    // 正常情况下是60次/秒
    renderer.render( scene, camera );
  }
  animate();
}
