package main

// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2cv1c/
// 加一
import "fmt"

func plusOne(digits []int) []int {
	l := len(digits);
	// 末尾循环
	for i := l-1; i >= 0; i-- {
		// 表示遇到10进位，10清0，继续进行循环
		if digits[i] == 9 {
			digits[i] = 0;
		} else {
			// 表示未到10进位，直接退出返回
			digits[i]++;
			break;
		}
		if i == 0 {
			digits[0] = 1;
			return append(digits, 0)
		}
	}
	
	return digits;
}

func main() {
	arr := []int{0}
	v:= plusOne(arr);
	fmt.Println(v, 1);
}