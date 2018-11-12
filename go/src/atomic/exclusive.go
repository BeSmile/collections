package main

import (
	"fmt"
	"runtime"
	"sync"
	"time"
)

func main() {
	var mutex sync.Mutex

	fmt.Println("Lock the lock.(GO)")
	mutex.Lock()
	fmt.Println("The lock is locked.(G0)")

	for i := 1; i < 4; i++ {
		go func(i int) {
			fmt.Printf("Lock the lock. (G%d)\n", i)
			mutex.Lock()
			fmt.Printf("The lock is locked. (G%d)\n", i)
			mutex.Unlock()
			runtime.Gosched()
		}(i)
	}

	time.Sleep(time.Second * 1)
	fmt.Println("Unlock the lock. (G0)")
	mutex.Unlock()
	fmt.Println("The lock is unlocked. (G0)")
	time.Sleep(time.Second * 2)
}
