package main

import (
	"fmt"
	"strings"
)

func main() {
	var buffer strings.Builder
	for i := 0; i< 100; i++ {
		buffer.WriteString("hello world")
	}
	
	fmt.Println(buffer.String())
}