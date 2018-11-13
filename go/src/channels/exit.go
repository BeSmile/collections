package main

func main() {
	var ch = make(chan int)
	go func() {
		ch <- 1
	}()
}
