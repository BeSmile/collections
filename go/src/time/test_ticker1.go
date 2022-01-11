/*
 * @Description:
 * @Version:
 * @Author: BeSmile
 * @Date: 2022-01-07 22:43:25
 * @LastEditors: BeSmile
 * @LastEditTime: 2022-01-08 00:06:58
 */
package main

import (
	"fmt"
	"sync"
	"time"
)

var wg sync.WaitGroup

func init() {
	wg = sync.WaitGroup{}
}

func print(chanInt <-chan int) {
	sum := 0
	fmt.Println("Println")
	for v := range chanInt {
		fmt.Printf("接收值:%d\n", v)

		sum += v
		// wg.Done()
		if sum > 20 {
			fmt.Printf("sum: %d", sum)
			break
		}
	}
}

func main() {
	timer := time.NewTimer(time.Second)
	chanInt := make(chan int, 1)
	go func() {
		// count := 0
		defer wg.Done()
		for _ = range timer.C {
			wg.Add(1)

			select {
			case chanInt <- 1:
			case chanInt <- 2:
			case chanInt <- 3:
			}

			// count++
			// if count > 10 {
			// 	timer.Stop()
			// 	break
			// }
		}

	}()

	// close(chanInt)
	go print(chanInt)
	time.Sleep(time.Second * 10)
	wg.Wait()
}
