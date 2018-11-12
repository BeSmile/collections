package main

import (
	"fmt"
	"time"
)

func main() {
	//创建一个打点器 每2s执行一次
	ticker := time.NewTicker(time.Second * 2)

	go func() {
		//通过range循环执行打点器
		for t := range ticker.C {
			fmt.Println(t)
		}
	}()
	time.Sleep(time.Second * 3)
	ticker.Stop()
	fmt.Println("stop ticker")
	time.Sleep(time.Second * 20)
	fmt.Println("timer exit")
}
