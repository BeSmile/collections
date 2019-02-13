package main

import "fmt"

func main() {
	fmt.Println(fact(3))
}

func fact(n int, num int) int {
	if n <= 1 {
		return 1
	} else {
		return num * fact(n)
	}
}
