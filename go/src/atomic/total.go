package main

import (
	"fmt"
	"runtime"
	"sync"
	"sync/atomic"
	"time"
)

var total struct {
	value int
	sync.Mutex
}

func worker1(wg *sync.WaitGroup, at chan uint64, res chan uint64) {
	defer wg.Done()

	for i := 0; i < 100; i++ {
		wg.Add(1)
		total.Lock()
		ato := <-at
		atomic.AddUint64(&ato, 1)
		res <- ato
		//at <- ato
		total.value += i
		total.Unlock()
		runtime.Gosched()
	}
}

func main() {
	var wg sync.WaitGroup

	var at = make(chan uint64)
	var res = make(chan uint64)
	go worker1(&wg, at, res)
	at <- uint64(1)

	//go worker1(&wg, at, res)
	//close(at)
	go func() {
		for r := range res {
			atomic.LoadUint64(&r)
			at <- r
			//res <- 11
			fmt.Println(atomic.LoadUint64(&r))
		}
	}()

	//wg.Wait()

	time.Sleep(3 * time.Second)
	total.Lock()
	fmt.Println(total.value)
	total.Unlock()
}
