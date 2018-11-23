package main

import (
	"fmt"
	"runtime"
	"time"
)

type TD <- chan string
type RS chan <- string

func main() {
	fmt.Println(runtime.NumGoroutine())  // main()本身就是runtime.m0中的 runtime.g0所以显示1
	name := []string{"Eric", "Robert", "Jim", "Mark"}
	runtime.GC() //强制进行垃圾回收
	for _, nm := range name {
		go func(who string) {
			fmt.Println("Hello", who)
		}(nm)
		runtime.Gosched()//是为了使当前的goroutine有机会运行
	}
	fmt.Println(runtime.NumGoroutine()) //1 + 4 = 5
	test()
	fmt.Println(runtime.NumGoroutine()) //goroutine数量
	time.Sleep(time.Second )
	fmt.Println(runtime.NumGoroutine())
}

func test() {
	go func() {
		fmt.Println("test GoExit")
		runtime.Goexit() // goroutines退出
		fmt.Println("test GoExit End")
	}()
	runtime.Gosched()
}

func d2() {
	name := []string{"Eric", "Robert", "Jim", "Mark"}
	for _, nm := range name {
		go func() {
			fmt.Println("Hello", nm)
		}()
		runtime.Gosched()
	}
}

func d1() {
	name := "Eric"
	go func() {
		fmt.Println("Go Goroutines", name)
	}()

	name = "Harry"
	runtime.Gosched()
}