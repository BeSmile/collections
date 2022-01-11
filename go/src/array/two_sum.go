// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2jrse/
// 两数之和
package main

import "fmt"

// 记录起始的坐标，如果没找到就退回
func twoSum1(nums []int, target int) []int {
	v := make([]int, 0);
	l := len(nums);
	start := 0;
	for i := 1; i < l; i++ {
		// fmt.Println(start, i, nums[start], nums[i])
		if nums[start] + nums[i] == target {
			return append(v, start, i);
		}
		if i == l -1 {
			start++;
			i = start;
		}
	}
	return v;
}

func twoSum(nums []int, target int) []int {
	arr := make([]int, 0);
	m := make(map[int]int);
	
	for i, v := range nums {
		// fmt.Println(m, v)
		if m[target - v] >= 0 && i > 0 {
			arr = append(arr, m[target-v], i);
			break;
		}
		m[v] = i;
	}
	return arr;
}


func main() {
	arr := []int{2,7,11,15}
	fmt.Println(twoSum(arr, 9));

	// arr := []int{3,2,4}
	// fmt.Println(twoSum(arr, 6));

	// arr := []int{3, 2,3}
	// fmt.Println(twoSum(arr, 6));

	// arr := []int{2, 5,5, 11}
	// fmt.Println(twoSum(arr, 10));
}