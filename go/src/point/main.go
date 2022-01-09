/*
 * @Description:
 * @Version:
 * @Author: BeSmile
 * @Date: 2022-01-05 23:49:24
 * @LastEditors: BeSmile
 * @LastEditTime: 2022-01-06 00:07:59
 */
package main

import (
	"fmt"
)

func main() {
	a := []int{1, 2, 3}
	var p [3]*int

	// for i, v := range a {
	// 	fmt.Println(i, v)
	// 	p[i] = &v
	// }
	for i := 0; i < len(a); i++ {
		p[i] = &a[i]
		*p[i]++
	}
	for _, v := range p {
		fmt.Printf("%v\t:%v\n", v, *v)
	}
}
