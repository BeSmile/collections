package main

import (
	"fmt"
	"math/rand"
	"runtime"
	"sync"
	"sync/atomic"
	"time"
)

func main() {
	var state = make(map[int]int)

	var mutex sync.Mutex

	var ops int64 = 0

	for i := 0; i < 10; i++ {
		go func() {
			total := 0
			for {
				key := rand.Intn(5)
				mutex.Lock()
				total += state[key]
				mutex.Unlock()
				atomic.AddInt64(&ops, 1)
				runtime.Gosched()
			}
			fmt.Println(total)
		}()
	}
	time.Sleep(time.Second * 3)
	for i := 0; i < 10; i++ {
		go func() {
			for {
				key := rand.Intn(5)
				mutex.Lock()
				state[key] = rand.Intn(100)
				mutex.Unlock()
				atomic.AddInt64(&ops, 1)
				runtime.Gosched()
			}
		}()
	}
	mutex.Lock()
	fmt.Println("23")
	mutex.Unlock()
	time.Sleep(time.Second)

	opsFinal := atomic.LoadInt64(&ops)

	fmt.Println(opsFinal)
}
