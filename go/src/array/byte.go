package main

import "fmt"

func main() {
	buffer := make([]int , 20, 30)
	fmt.Printf("%v %2d \n", len(buffer), buffer)
}