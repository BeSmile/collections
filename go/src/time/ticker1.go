package main

import (
	"log"
	"time"
)

func main() {
	var tick <-chan time.Time

	tick = time.Tick(time.Second)

	for {
		select {
		case <-tick:
			{
				log.Println("ticker")
			}
		}
	}
}
