package main

import "time"

//export GODEBUG=schedtace=2000

func main() {
	for i := 0; i < 10; i++ {
		go func() {
			time.Sleep(time.Second * 5)
		}()
		time.Sleep(time.Second)
	}
}
