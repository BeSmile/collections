package main

import (
	"fmt"
	"time"
)

/*
	每5s钟做5个包子
	每10s 卖出3个包子
 */

func main() {
	cook := make(chan int, 3)
	eat := make(chan int, 3)

	cook <- 10
	eat <- 10

	go func() {
		for x := 0; ; x++ {

			al := <-eat
			cook <- al + 5
			fmt.Printf("做了5个包子总共%d个包子\n", al + 5)
			time.Sleep(time.Second * 5)
		}
	}()

	for {
		time.Sleep(time.Second *10)
		al := <-cook

		al -= 3
		if al < 0 {
			al = 0
		}
		eat <- al

		fmt.Printf("卖出3个包子还有%d个包子\n", al)
	}
	//close(ch)
}
