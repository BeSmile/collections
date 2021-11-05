/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-08-24 10:13:38
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-08-24 10:35:56
 */
function add () {
  let res = [...arguments].reduce((pre, next) => {
    return pre+next;
  }, 0);
  const closureFn = function() {
    if(arguments.length) {
      res += [...arguments].reduce((pre, next) => {
        return pre+next;
      }, 0);
      return closureFn;
    }
    return res
  }
  closureFn.toString = function() {
    return res;
  }
  return closureFn;
}

console.log(add(1,2,3)()) //6
console.log(add(1,2,3)) //f 6
console.log(add(1)(3)) // f 4
console.log(add(1)(3)(5)()) //9