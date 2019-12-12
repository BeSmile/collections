import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';

function initFloor(scene:any): void {

  // let material = new THREE.MeshBasicMaterial({color:0x00ff00});
  let loader = new THREE.TextureLoader()


  loader.load("./floor.jpg", function(texture){
    let geometry = new THREE.PlaneBufferGeometry(window.innerWidth * 2,window.innerHeight * 2);
    let material:any = new THREE.MeshLambertMaterial({
      map: texture,
      // transparent: true
      lightMapIntensity: 10,
    });
    let rect = new THREE.Mesh(geometry, material);
    scene.add(rect);

  });
}

function init(): void {
  let scene = new THREE.Scene();
  // scene.background = new THREE.Color( 0xf5f5f5 );
	// scene.fog = new THREE.Fog( 0x000000, 250, 1400 );
  var mesh:any;
  var redMesh:any;
  var redMaterial:any;
  var redpackets:any;
  // let camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  let camera = new THREE.OrthographicCamera(0, window.innerWidth, window.innerHeight, 0, 1, 1000);
  var text = new THREE.FontLoader().load('./font.json', function(text) {
    let textGeometry = new THREE.TextGeometry('hello world', {
      size: 20,
      font: text,
      height: 10, //文字的厚度
      // weight: 'normal', //值为'normal'或'bold'，表示是否加粗
      bevelThickness: 1, //倒角厚度
      bevelSize: 1, //倒角宽度
      curveSegments: 30,//弧线分段数，使得文字的曲线更加光滑
      bevelEnabled: true, //布尔值，是否使用倒
    });
    var mat = new THREE.MeshPhongMaterial({
         color: 0xffe502,
         specular: 0x009900,
         shininess: 30,
         // shading: THREE.FlatShading
     });
    mesh = new THREE.Mesh(textGeometry, mat);
    mesh.castShadow = true;
    mesh.position.set(1,1,1);
    scene.add(mesh);

    redpackets = new THREE.Geometry();

    for(let i = 0; i < 100; i++) {
      var red = new THREE.Vector3(
        Math.random() * window.innerWidth,
        window.innerHeight,
        0,
      )
      // red.velocity = 0.1;
      redpackets.vertices.push(red);
    }
    console.log(redpackets);
    let sprite = new THREE.TextureLoader().load('./logo192.png');
    redMaterial = new THREE.PointsMaterial({
      map: sprite,
      color: 0x000000,
      size: 0.7,
    })
    redMesh = new THREE.Points(redpackets, redMaterial);

    scene.add(redMesh);

    var dirLight = new THREE.DirectionalLight( 0xffffff, 0.125 );
		dirLight.position.set( 0, 0, 1 ).normalize();
		scene.add( dirLight );

    var pointLight = new THREE.PointLight( 0xffffff, 1.5 );
		pointLight.position.set( 0, 100, 90 );
		scene.add( pointLight );

    camera.lookAt(scene.position)
    var axisHelper = new THREE.AxesHelper( 10e3 );
    scene.add( axisHelper );

    animate();
  })

  let renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha:true
  });
   // renderer.setClearAlpha(0.01);
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  camera.position.set(0, 0, 1000);
  // initFloor(scene);
  renderer.setPixelRatio(window.devicePixelRatio)
  function animate() {
    // camera.position.y += 0.1;
    // camera.position.z += 0.1;
    // mesh.rotation.x += 0.1;
    mesh.rotation.y += 0.1;
    // redMesh.rotation.y +=0.002;

    // mesh.rotation.z += 0.1;
    redpackets.vertices.forEach((p:any) => {
      p.velocity += p.acceleration
      p.y -= p.velocity;

      if (p.y < -200) {
        p.y = 200;
        p.velocity = 0;
      }
    });
    redpackets.verticesNeedUpdate = true;

    renderer.render(scene, camera);
    requestAnimationFrame(animate)
 }
}

const App: React.FC = () => {
  init();
  return (
    <div id="info">Description</div>
  );
}

export default App;
