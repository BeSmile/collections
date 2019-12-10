import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';

let
  scene: any,
  camera : any,
  ambient : any,
  directionalLight : any,
  renderer : any,
  cloudParticles: Array<any> =[],
  flash: any,
  rain: any,
  rainGeo: any,
  rainCount:number = 15000;

function animate():void {
    cloudParticles.forEach((p: any) => {
      p.rotation.z -=0.002;
    });
    // 然后在动画函数中，我们将移动每个水滴并增加速度来模拟重力。如果他们在屏幕外，也可以重置位置，并在雨物体上增加一个小的旋转来创造一个电影效果
    rainGeo.vertices.forEach((p: any) => {
      p.velocity -= 0.1 + Math.random() * 0.1;
      p.y += p.velocity;
      if (p.y < -200) {
        p.y = 200;
        p.velocity = 0;
      }
    });
    rainGeo.verticesNeedUpdate = true;
    rain.rotation.y +=0.002;
    if(Math.random() > 0.93 || flash.power > 100) {
      if(flash.power < 100)
        flash.position.set(
          Math.random()*400,
          300 + Math.random() *200,
          100
        );
      flash.power = 50 + Math.random() * 500;
    }
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

function init():void {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 1;
  camera.rotation.x = 1.16;
  camera.rotation.y = -0.12;
  camera.rotation.z = 0.27;

  //接下来，我将在此处添加两种类型的光源。 首先是环境光。 这将从各个方向照亮场景中的所有对象。 第二个是定向光，它将代表天空中的月光。
  ambient = new THREE.AmbientLight(0xffeedd);
  scene.add(ambient);

  directionalLight = new THREE.DirectionalLight(0xffeedd);
  directionalLight.position.set(0, 0, 1);
  scene.add(directionalLight);

  // 接下来，我将添加一些闪电。让我们设置一个带有蓝色的pointLight。我将把它放置在云的后面，并将它添加到场景中
  flash = new THREE.PointLight(0x062d89, 30, 500, 1.7);
  flash.position.set(200, 300, 100);
  scene.add(flash);

  //我将使用当前的viewport大小来设置WebGLRenderer。然后将其作为画布元素添加到页面中。也添加雾到场景中，以创建电影效果。
  renderer = new THREE.WebGLRenderer();
  scene.fog = new THREE.FogExp2(0x11111f, 0.002);
  renderer.setClearColor(scene.fog.color);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  //因此，我将创建一个循环以使用vector3对象创建每个顶点。 我们将使用math.random（）随机分配位置，然后使用vertices.push将顶点添加到几何中
  rainGeo = new THREE.Geometry();
  for(let i=0;i<rainCount;i++) {
    let rainDrop:any = new THREE.Vector3(
      Math.random() * 400 -200,
      Math.random() * 500 - 250,
      Math.random() * 400 - 200
    );
    // 现在我们将通过给每个雨滴增加速度特性来赋予雨动画效果。
    rainDrop.velocity = {};
    rainDrop.velocity = 0;
    rainGeo.vertices.push(rainDrop);
  }
  // 然后我将使用PointMaterial类创建一个rain材质。设置大小和颜色为白色，透明为真。
  let rainMaterial:any = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.1,
    transparent: true
  });
  rain = new THREE.Points(rainGeo,rainMaterial);
  scene.add(rain);
  let loader = new THREE.TextureLoader();
  loader.load("./smoke.png", function(texture){

    let cloudGeo:any = new THREE.PlaneBufferGeometry(500,500);
    let cloudMaterial:any = new THREE.MeshLambertMaterial({
      map: texture,
      transparent: true
    });

    for(let p=0; p<25; p++) {
      let cloud:any = new THREE.Mesh(cloudGeo,cloudMaterial);
      cloud.position.set(
        Math.random()*800 -400,
        500,
        Math.random()*500 - 450
      );
      cloud.rotation.x = 1.16;
      cloud.rotation.y = -0.12;
      cloud.rotation.z = Math.random()*360;
      cloud.material.opacity = 0.6;
      cloudParticles.push(cloud);
      scene.add(cloud);
    }
    animate();
  });
}

const App: React.FC = () => {
  init();
  return (
    <></>
  );
}

export default App;
