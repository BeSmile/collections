/*
 * @Description:
 * @Version:
 * @Author: BeSmile
 * @Date: 2022-01-09 21:52:26
 * @LastEditors: BeSmile
 * @LastEditTime: 2022-01-09 21:55:32
 */
package main

import "fmt"

func reverseString(s []byte) {
	left, right := 0, len(s)-1
	for left < right {
		s[left], s[right] = s[right], s[left]
		left++
		right--
	}
}

func main() {
	arr := []byte{'h', 'e', 'l', 'l', 'o'}
	fmt.Println(arr)

	reverseString(arr)
	fmt.Println(arr)
}
