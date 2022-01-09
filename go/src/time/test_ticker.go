/*
 * @Description:
 * @Version:
 * @Author: BeSmile
 * @Date: 2022-01-07 22:35:15
 * @LastEditors: BeSmile
 * @LastEditTime: 2022-01-07 22:41:47
 */
package main

import (
	"fmt"
	"time"
)

func main() {
	ticker := time.NewTicker(time.Second * 1)
	fmt.Println(time.Now())

	count := 0
	for _ = range ticker.C {
		fmt.Println("fmt")
		count++
		if count >= 5 {
			ticker.Stop()
			break
		}
	}

	fmt.Println("ticker")

	fmt.Println(time.Now())
}
