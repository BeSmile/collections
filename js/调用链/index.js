/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-08-13 15:18:42
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-08-13 17:27:48
 */
const addRemote = async (a, b) => new Promise(resolve => {
  setTimeout(() => resolve(a + b), 1000)
});

// 请实现本地的add方法，调用addRemote，能最优的实现输入数字的加法。
async function add(...inputs) {
  // 你的实现
  console.log(inputs);
  return inputs.reduce((promiseChain, next) => {
    return promiseChain.then(res => {
      return addRemote(res, next);
    })
  }, Promise.resolve(0))
}

// 请用示例验证运行结果:
add(1, 2)
  .then(result => {
    console.log(result); // 3
});

add(3, 5, 2)
  .then(result => {
    console.log(result); // 10
})

const RejectPromise = () => {
  return new Promise((resolve, reject) => {
    reject(111);
  })
}

RejectPromise().then(d => {
  console.log('then', d);
}).catch(e => {
  console.log('catch', e);
  console.log(Promise.resolve(1), '222');
  return Promise.resolve(1);
}).then(r => {
  console.log('r', r);
})