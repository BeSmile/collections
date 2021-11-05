/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-09-01 10:06:39
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-09-01 17:33:58
 */
console.log('hello world plugin');

const traverseDomTree = (parent) => {
  if(parent.children.length <=0) return;
  // traverseDomTree(parent);
  console.log(parent.children, 'parse');
  for(let i=0;i<parent.children.length;i++) {
    const childNode = parent.children[i];
    if(childNode instanceof HTMLHeadElement) {
        console.log('HTMLHeadElement', childNode);
        continue;
    }
    if(childNode instanceof HTMLScriptElement){
      console.log('HTMLScriptElement', childNode);
        continue;
    }
    childNode.id = Date.now();
    console.log(childNode, 'childNode');
    traverseDomTree(childNode);
  }
}

const ready = () => {
  const body = document.documentElement;

  console.log(body.children);
  console.log(body.children[1])
  traverseDomTree(body);
  const config = {attributes: true, childList: true,subtree: true};
  const callback = function(mutationsList) {
    console.log(mutationsList, 'mutationsList');
  }
  const observer = new MutationObserver(callback);
  observer.observe(body, config);
}
document.addEventListener('DOMContentLoaded', ready, false);