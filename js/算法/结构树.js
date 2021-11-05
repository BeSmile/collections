/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-07-13 09:40:56
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-07-13 11:17:41
 */
let arr = [
  // {id: 1, name: '部门1', pid: 0},
  // {id: 4, name: '部门12', pid: 0},
  // {id: 2, name: '部门2', pid: 1},
  // {id: 3, name: '部门3', pid: 1},
  // {id: 4, name: '部门4', pid: 3},
  // {id: 5, name: '部门5', pid: 4},
  { id: 5, name: '部门5', pid: 4 },
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 12, name: '部门4', pid: 8 },
]
/**
 *
 * @param {*} tree 原始数组
 * @param {*} pid 查找的pid
 */
const generateTree = (tree, pid) => {
  const filter = tree.filter(t => t.pid === pid);
  // 递归退出条件
  if(filter.length === 0) {
    return [];
  }
  return filter.map(f => ({
    ...f,
    children: generateTree(tree, f.id),
  }))
}


console.log(JSON.stringify(generateTree(arr, 0)));



