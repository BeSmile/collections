async function f() {
    console.log('async promise')
}
console.log(f())
console.log('here before promise');


//simple promise
var p = new MyPromise((resolve, reject) => {
   resolve('return promise')
});

p.then((value) => {
    //do something with code //
    console.log('object')
    return {
        msg: value
    }
}).then(value => {
    console.log(value)
});
