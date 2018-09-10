package main

import (
	"fmt"
	// "errors"
	"net/http"
	"net/rpc"
)

type Args struct{
	A, B int
}

type Student struct{
	name string
	Args
}

type Arith int

func (t *Arith) Multiply(args *Args, reply *int) error {
	*reply = args.A * args.B
	return nil
}

func main() {

	arith := new(Arith)
	rpc.Register(arith)
	rpc.HandleHTTP()
	
	error := http.ListenAndServe(":1234", nil)

	if error != nil {
		fmt.Println(error.Error())
	}
}