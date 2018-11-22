package main

import (
	"fmt"
	"os"
	"os/signal"
	"syscall"
)

type Ds struct {
	X int
}

func main() {
	sigRev := make(chan os.Signal, 1)
	sigs := []os.Signal{syscall.SIGINT, syscall.SIGQUIT}
	signal.Notify(sigRev, sigs...)
	for sig := range sigs {
		fmt.Printf("Received a signal: %d\n", sig)
	}

	fmt.Println(os.Getegid())

}
