/*
 * @Description:
 * @Version:
 * @Author: BeSmile
 * @Date: 2022-01-09 22:00:59
 * @LastEditors: BeSmile
 * @LastEditTime: 2022-01-09 22:15:02
 */
package main

import "fmt"

func reverseWords(s string) string {
	length := len(s)
	ans := []byte{}
	for i := 0; i < length; {
		start := i
		// 进行获取最近的下标
		for i < length && s[i] != ' ' {
			i++
		}
		for p := i; p > start; p-- {
			ans = append(ans, s[p-1])
		}

		// 处理空格部分
		for i < length && s[i] == ' ' {
			i++
			ans = append(ans, ' ')
		}
	}
	return string(ans)
}

func main() {
	v := "Let's take LeetCode contest"
	r := reverseWords(v)

	fmt.Println(r)
}
