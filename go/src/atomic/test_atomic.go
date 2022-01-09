/*
 * @Description:
 * @Version:
 * @Author: BeSmile
 * @Date: 2022-01-09 18:55:29
 * @LastEditors: BeSmile
 * @LastEditTime: 2022-01-09 18:58:30
 */
package main

import (
	"fmt"
	"sync"
	"time"
)

var i int

var lock sync.Mutex

func sub() {
	lock.Lock()
	i--
	lock.Unlock()
}

func add() {
	lock.Lock()
	i++
	lock.Unlock()
}

func main() {
	for i := 0; i < 100; i++ {
		go sub()
		go add()
	}
	time.Sleep(time.Second * 3)
	fmt.Println(i)
}
