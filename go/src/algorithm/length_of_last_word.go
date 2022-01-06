// https://leetcode-cn.com/problems/length-of-last-word/
// 最后一个单词的长度
package main

import "fmt"

func lengthOfLastWord(s string) int {
	l := len(s);
	end := l;
	r := 0;
	for i := l - 1; i >= 0; i-- {
		// 记录最后一次的空格位置
		if s[i] == 32 {
			if end - i > 1 {
				return end - i - 1
			}
			end = i;
		} else {
			r = end - i;
		}
	}
	return r;
}

// 另外一种方法
// 记录非空格元素，遇到空格元素直接退出,更简便

func main() {
	fmt.Println("len", lengthOfLastWord(" ddd"));
}