/*
 * @Description:
 * @Version:
 * @Author: BeSmile
 * @Date: 2022-01-07 01:06:35
 * @LastEditors: BeSmile
 * @LastEditTime: 2022-01-07 01:08:56
 */
package main

import (
	"fmt"
	"sync"
)

var wg sync.WaitGroup

func showMessage(pid int) {
	fmt.Println("showMessage", pid)
	wg.Done()
}

func main() {
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go showMessage(i)
	}
	fmt.Println("main progress done")
	wg.Wait()
}
