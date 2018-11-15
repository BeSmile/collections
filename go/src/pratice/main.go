package main

import (
	"fmt"
)

func move(x, y int) (int, int) {
	return y, x
}

func main() {
	print := [6]int{5, 6, 4, 2, 3, 4}
	for i := 0; i < len(print); i++ {
		fmt.Println(print[i])
	}
	x, y := 2, 3
	fmt.Println(move(x, y))
}
