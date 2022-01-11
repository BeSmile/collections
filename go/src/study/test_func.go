/*
 * @Description: 闭包函数
 * @Version: 
 * @Author: BeSmile
 * @Date: 2022-01-05 23:09:48
 * @LastEditors: BeSmile
 * @LastEditTime: 2022-01-05 23:15:06
 */
package main

import "fmt"

func add(base int) func(int) int {
	return func(value int) int {
		return value + base;
	}
}

func main() {
	add5 := add(5);
	fmt.Println(add5(100));
}