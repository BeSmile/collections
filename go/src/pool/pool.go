package main

import (
	"fmt"
	"log"
	"runtime"
	"runtime/debug"
	"sync"
	"sync/atomic"
)

func main() {
	defer debug.SetGCPercent(debug.SetGCPercent(-1)) //禁用GC

	var count int32

	newFunc := func() interface{} {
		log.Println("caller")
		return atomic.AddInt32(&count, 1)
	}
	pool := sync.Pool{New: newFunc}

	v1 := pool.Get()
	fmt.Println("v1", v1)

	pool.Put(newFunc())
	pool.Put(newFunc())
	pool.Put(newFunc())
	pool.Put(newFunc())
	pool.Put(newFunc())

	v2 := pool.Get()
	fmt.Println("v2", v2)

	debug.SetGCPercent(100)
	runtime.GC()

	v3 := pool.Get()
	fmt.Println("v3", v3)
}
