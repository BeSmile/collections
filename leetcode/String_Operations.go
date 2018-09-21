package main

import (
	"fmt"
)

func main() {
	str := "hello word"
	s_arr := []byte(str)

	for _, v := range s_arr {
		fmt.Printf(string(v))
	}
}