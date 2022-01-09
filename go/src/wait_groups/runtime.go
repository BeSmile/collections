/*
 * @Description:
 * @Version:
 * @Author: BeSmile
 * @Date: 2022-01-07 01:11:28
 * @LastEditors: BeSmile
 * @LastEditTime: 2022-01-07 01:20:13
 */
package main

import (
	"fmt"
	"runtime"
	"time"
)

func showMessage(msg string) {
	for i := 0; i < 10; i++ {
		fmt.Printf("msg:%v \t %v\n", msg, i)
		if i >= 5 {
			runtime.Goexit() // 直接退出
		}
	}
}

func main() {
	fmt.Println("runtime.NumCPU", runtime.NumCPU())
	runtime.GOMAXPROCS = 2 // 设置最大核心数
	go showMessage("java")
	for i := 0; i < 2; i++ {
		runtime.Gosched() // 让子协程来执行任务 让出时间片
		fmt.Printf("golang:%v\n", "global")
	}
	time.Sleep(1000)
	fmt.Println("run time")
}
