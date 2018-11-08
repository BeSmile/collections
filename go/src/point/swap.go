package main

import "fmt"

func swapAndProduct1(i *int, j *int, prouct *int) {
	if(*i > *j) {
		*i, *j = *j, *i
	}
	*prouct = *i * *j
}

func main() {
	i := 9
	j := 5
	product := 0
	swapAndProduct1(&i, &j, &product)
	fmt.Println(i, j, product)
}
