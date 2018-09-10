package main

import (
	"fmt"
	"net/rpc"
	"log"
)

type Args struct {
	A, B int
}

const serverAddress = "localhost"

func main()  {

	args := Args{31, 24}

	client, err := rpc.DialHTTP("tcp", serverAddress+":1234")

	if err != nil {
		log.Fatal("dialing:", err)
	}

	var reply int
	err = client.Call("Arith.Multiply", args, &reply)
	if err != nil {
		log.Fatal("arith error:", err)
	}
	fmt.Printf("Arith: %d*%d=%d\n", args.A, args.B, reply)
}