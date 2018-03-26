const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {return resolve('success')}, 1000);
})

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => { return resolve(p1) }, 1000)
})

p2
  .then(result => console.log(result))
  .catch(error => console.log(error))