package main

import (
	"fmt"
	"log"
	"time"
)

//定时器

func main() {
	time.AfterFunc(time.Second*1, func() {
		fmt.Println("定时器1s executed")
	})

	//NewTimer创建一个新的Timer，它将在至少持续时间d之后在其通道上发送当前时间
	timer1 := time.NewTimer(time.Second * 2)
	<-timer1.C //通道是阻塞的  通道只有一次 第二次将会报错
	log.Println("Timer 1 expired")
	timer1.Reset(time.Second * 1) // 相当于 timer <- time 往内部通道重新赋值
	<-timer1.C
	log.Println("Timer 1 restart expired")

	timer2 := time.NewTimer(time.Second * 2)
	//创建任务
	go func() {
		<-timer2.C
		fmt.Println("Timer 2 expired")
	}()
	//sleep 2s 上一个定时已完成所以停止会无效
	time.Sleep(time.Second * 1)
	//直接停止timer2定时任务
	stop2 := timer2.Stop()
	if stop2 {
		fmt.Println("Timer 2 stopped")
	}
}
