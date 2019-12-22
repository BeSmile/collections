import React, { useEffect, }  from 'react';
import logo from './logo.svg';
import './App.css';
// import * as THREE from 'three';
import { Stats } from 'three-stats';
import _ from 'lodash';
var THREE = require('three');
var OBJLoader = require('three-obj-loader');
OBJLoader(THREE);
const innerWidth = window.innerWidth;

const innerHeight = window.innerHeight;
const width = innerWidth / 2 ;
const height = innerHeight / 2;
var materialArray = [];

const Eventer = function() {
  this.pool = [];// 存储池
  this.subscribers = {};
  this.max = 10;
  this.total = 0;
  this.progress = [];
  this.init();
  return {
    remove: this.remove.bind(this),
    subscribe: this.subscribe.bind(this),
    publish: this.publish.bind(this),
    draw: this.draw.bind(this),
  }
}

Eventer.prototype = {
  constructor: Eventer,
  // 进程池存在最大数，到达最大数进入存储池
  doProgress: function(process) {
    // console.log('push');
    if (this.pool.length < this.max) {
      this.pool.push(process);
    } else {
      this.progress.push(process);
    }
    return this.progress;
  },
  init: function() {
    this.total = 0;
  },
  isEmptyProgress: function() {
    return this.progress.length === 0 ? true : false;
  },
  // 发布消息
  publish: function(trigger, item) {
    const $this = this;
    let subscribes = $this.subscribers[trigger];// 获得订阅的事件函数
    if(!subscribes) return false;
    $this.doProgress(item);
    let len = subscribes.length;
    while(len--) {
      this.progress.forEach(function(item) {
        subscribes.reduce(function(result, func) {
          // console.log('reduce', $this);
          result = func.call($this, item, result);
          return result;
        }, {})
      })
    }
  },
  // 订阅多个事件
  subscribe: function(trigger, fn) {
    if(!this.subscribers[trigger]) {
      this.subscribers[trigger] = [];
    }
    this.subscribers[trigger].push(fn);
  },
  // 取消订阅事件
  unsubscribe: function(trigger) {
    if(!this.subscribers[trigger]) {
      return false;
    }
    this.subscribers[trigger] = [];
  },
  // 删除队列并且
  remove: function(mesh) {
    const rmArray = _.remove(this.pool, function(item) {
      return item.uuid === mesh.uuid;
    });
    if (rmArray.length <= 0) {
      return false;
    }
    // TODO: 从存储池获得
    if (!this.isEmptyProgress()) {
      this.doProgress(this.progress.shift());
    }
    const item = rmArray[0];
    // 释放geometry
    item.geometry.dispose();
    return item;
  },
  draw: function(speed = 1) {
    console.log(this);
    const $this = this;
    $this.pool.forEach(function(item) {
      // 判断是否超出边界 超出边界 删除
      if (item.position.y < (-height - 64 / 2)) {
        $this.remove(item);
      } else {
        item.position.y -= speed;
      }
    })
  }
}

// 进度条管理工具
function initLoadingManager(events) {
  const manager = new THREE.LoadingManager();
  for(let name in events) {
    if (!manager.hasOwnProperty(name)) {
      throw new Error(`no have function ${name} in LoadingManager `);
      continue;
    }
    manager[name] = events[name];
  }
  return new THREE.TextureLoader( manager );
};

function addZero(a){
    return ('0' + a).slice(-2);
}

// 生成红包
const generateRedPacket = (materialArray) => {
  const { image } = materialArray[0].map;
  const { width: imgWidth, height: imgHeight } = image;
  const ratio = imgWidth / imgHeight;
  // const ratio = window.devicePixelRatio;
  const geometry = {
    x: 64,
    y: 64 / ratio,
    ratio: ratio,
  }
  var squareGeomery = new THREE.PlaneGeometry(geometry.x, geometry.y, 1);

  var plane = new THREE.Mesh( squareGeomery, materialArray );
  // const rWdith = _.random(-width + geometry.x, width - geometry.x, 0);
  const rWdith = _.random(-width + geometry.x / 2, width - geometry.x / 2, 0);
  plane.position.set(rWdith, height + geometry.y / 2, 0);
  return plane
}

function init() {
  const event = new Eventer();
  event.subscribe('push', function(item) {
    // console.log('push', arguments, this);
    // event.doProgress(item);
    return 'push yellow'
  })
  var stats = initStats();
  var scene = new THREE.Scene();

  var axisHelper = new THREE.AxesHelper( 10e3 );
  scene.add( axisHelper );

  let camera = new THREE.OrthographicCamera(-width, width, height, -height, 1, 1000);

  var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  var loader = new initLoadingManager  ({
    onProgress: (item, loaded, total) => {
      console.log(item, loaded, total);
      console.log('Loaded:', Math.round(loaded / total * 100, 2) + '%')
    },
    onLoad: () => {
      console.log('Loading complete');
      console.log(materialArray);
      for(let i = 0; i < 600; i++) {
        let plane = generateRedPacket(materialArray);

        event.publish('push', plane);

        scene.add( plane );
      }

      animate();
    },
    onError: (url) => {
      console.log('Error loading');
    },
    onStart: (item, loaded, total) => {
      console.log('Loading started');
    },
  });

  // 生成材质包
  function initMaterial(loader) {
    Array.from({
      length: 28,
    }).map((item, i) => {
      loader.load( `./images/store_${addZero(i+1)}.png`, function ( texture ) {
        materialArray[i] = new THREE.MeshBasicMaterial({
            // color: 0xff0000,
            map: texture,
            transparent: true,
        });
      } );
    });
  }

  initMaterial(loader);

  var spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(0, 0, 0);
  scene.add(spotLight);

  var raycaster = new THREE.Raycaster();//光线投射，用于确定鼠标点击位置

  var mouse = new THREE.Vector2();//创建二维平面
  window.addEventListener("mousedown",mousedown);//页面绑定鼠标点击事件
  //点击方法
  function mousedown(e){
      //将html坐标系转化为webgl坐标系，并确定鼠标点击位置
      mouse.x =  e.clientX / renderer.domElement.clientWidth*2-1;
      mouse.y =  -(e.clientY / renderer.domElement.clientHeight*2)+1;
      // console.log(mouse);
      //以camera为z坐标，确定所点击物体的3D空间位置
      raycaster.setFromCamera(mouse,camera);
      //确定所点击位置上的物体数量
      var intersects = raycaster.intersectObjects(scene.children);
      //选中后进行的操作
      if(intersects.length){
        let i = 0;
        const changematerial = function(i) {
          if(i < materialArray.length) {
            setTimeout(function() {
              intersects[0].object.material = materialArray[i];
              changematerial(++i);
            }, 50);
          } else {
            const mesh = event.remove(intersects[0].object);
            scene.remove(mesh)
          }
        }
        changematerial(i);
      }
  }

  camera.position.set(0, 0, 1)

  document.body.appendChild(renderer.domElement);
  function animate() {
    stats.update();
    // plane.position.y -= 1
    event.draw();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
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
  useEffect(function() {
    init();
  })

  return (
    <></>
  );
}

export default App;
