/*
 * @lc app=leetcode id=1491 lang=javascript
 *
 * [1491] Average Salary Excluding the Minimum and Maximum Salary
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
// var average = function(salary) {
//   salary.sort((i1,i2) => i1 -i2);
//   salary.pop();
//   salary.shift();
//   if(salary.length <= 0) return 0;
//   return salary.reduce((res, next) => res+next) / salary.length;
// };
var average = function(salary) {
  let min = salary[0] || 0;
  let max = 0;
  let sum = 0;
  const len = salary.length;
  for(let i =0; i < len; i++) {
    const v = salary[i];
    min = v < min?v:min;
    max = v>max?v:max;
    sum += v;
  }
  sum = sum - min - max;
  return sum / ((len -2) <= 0 ? 1: (len-2))
};
// @lc code=end

console.log(average([]));;
