package main

import (
	"fmt"
	"time"
)

func main() {
	var ch = make(chan int)
	go func() {

		time.Sleep(time.Second * 3)
		ch <- 1
		ch <- 12
		fmt.Println("dis")
	}()

	for {
		select {
		case <-ch:
			fmt.Println("hei")
		case <-time.After(1 * time.Second):
			fmt.Println("time out")
			//default:
			//
		}
	}

	time.Sleep(3 * time.Second)
}
