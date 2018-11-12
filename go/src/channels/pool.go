package main

import (
	"fmt"
	"time"
)

func worker(id int, jobs <-chan int, result chan<- int) {
	for j := range jobs {
		fmt.Println("worker", id, "processing job", j)
		time.Sleep(time.Second * 2)
		result <- j * 2
	}
}

func main() {
	//创建两个通道
	jobs := make(chan int, 100)
	results := make(chan int, 100)

	for i := 1; i <= 3; i++ {
		go worker(i, jobs, results)
	}
	time.Sleep(time.Second * 3)
	for j := 1; j <= 9; j++ {
		jobs <- j
	}
	close(jobs)

	for a := 1; a <= 9; a++ {
		fmt.Println(<-results)
	}
	//程序能输出的原因=> jobs不断的写入值 worker range对result 赋值 最后主程序持续输出result
}
