package main

import "fmt"

func main() {
	var x, y int

	pi := &x
	fmt.Println(&x == &x, pi == &x, *pi == x, &x == &y, &x == nil)

	x1, x2 := f(), f()
	fmt.Println(x1 == x2, x1, x2) //函数f内部是局部变量 每次返回的地址都是不同的
}

func f() *int {
	p := 1
	return &p
}
