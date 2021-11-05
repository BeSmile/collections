/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-08-25 15:59:35
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-08-25 16:02:52
 */
class Test {

}
const a = new Test();
function instanceOf(L, R) {
  const O = R.prototype;// R实例的原型对象
  L = L.__proto__;
  while(true){
    console.log(O, L);
    if(L === null) return false;

    if(O === L) return true;
    L = L.__proto__;
  }
}

console.log(instanceOf(a, Object));
