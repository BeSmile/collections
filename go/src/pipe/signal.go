package main

import (
	"fmt"
	"os"
	"os/signal"
	"sync"
	"syscall"
	"time"
)

func main() {
	sigRev := make(chan os.Signal, 1)
	//sigs := []os.Signal{syscall.SIGINT, syscall.SIGQUIT}
	//signal.Notify(sigRev, syscall.SIGKILL)
	signal.Stop(sigRev)
	close(sigRev)
	for sig := range sigRev {
		fmt.Printf("Received a signal: %d\n", sig)
	}
	sdemo1()
	//time.Sleep(time.Minute)
}

func sdemo1() {

	var wg sync.WaitGroup
	sigRev := make(chan os.Signal, 1)
	sigs := []os.Signal{syscall.SIGINT, syscall.SIGQUIT}
	fmt.Printf("%s... [sigRev] \n", sigs)
	signal.Notify(sigRev, sigs...)
	wg.Add(2)
	go func() {

		fmt.Println("time wait for 2 second")
		time.Sleep(time.Second * 2)
		fmt.Println("Stop notification")
		signal.Stop(sigRev)
		close(sigRev)
		fmt.Printf("Done. [sigRev]\n")
		for sig := range sigRev {
			fmt.Printf("Received a signal: %s\n", sig)
		}
		fmt.Printf("End. [sigRev]\n")
		defer wg.Done()
	}()

	sigRev1 := make(chan os.Signal, 1)
	sigs1 := []os.Signal{syscall.SIGQUIT, syscall.SIGHUP}
	fmt.Printf("%s... [sigRev1] \n", sigs1)
	go func() {

		signal.Notify(sigRev1, sigs1...)
		for sig := range sigRev1 {
			fmt.Printf("Received a signal1: %d\n", sig)
		}
		defer wg.Done()
	}()

	wg.Wait()
	time.Sleep(time.Second * 3)
}
