package main

// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x21ib6/
// 只出现一次的数字
import "fmt"

// ^位运算时 相同的数值会转化为0
// 1^1=0;
// 1^0=1;
// 0^1=1;
// 0^0=0;
func singleNumber(nums []int) int {
	res := 0;
	for _, v := range nums {
		res = v ^ res;
	}
	return res
}

func main() {
	arr := []int{4,1,2,1,2}
	fmt.Println(singleNumber(arr));
}