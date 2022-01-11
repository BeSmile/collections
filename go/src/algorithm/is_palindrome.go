/*
 * @Description:
 * @Version:
 * @Author: BeSmile
 * @Date: 2022-01-10 21:10:58
 * @LastEditors: BeSmile
 * @LastEditTime: 2022-01-10 21:25:50
 */
package main

import "fmt"

func isPalindrome(x int) bool {
	if x < 0 || (x%10 == 0 && x != 0) {
		return false
	}

	tmp := 0
	for tmp < x {
		tmp = tmp*10 + x%10
		x /= 10
	}
	return tmp == x || x == tmp/10
}

func main() {
	fmt.Println(isPalindrome(1221))

}
