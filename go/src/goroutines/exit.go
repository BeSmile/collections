package main

import (
	"log"
	"time"
)

//在多个子goroutine中触发事件的最简单方法是提供一个在准备就绪时关闭的go-chan。该go-chan上的所有未决接收将激活，而不是必须向每个goroutine发送单独的信号。
func main() {
	exitChan := make(chan int)
	go task1(exitChan)
	go task2(exitChan)
	time.Sleep(10 * time.Second)
	//close(exitChan)
}

func task1(exitChan chan int) {
	<-exitChan
	log.Printf("task1 exiting")
}

func task2(exitChan chan int) {
	<-exitChan
	log.Printf("task2 exiting")
}
