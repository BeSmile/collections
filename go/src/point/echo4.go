package main

import (
"flag"
"fmt"
"strings"
)

var n = flag.Bool("n", false, "omit trailing newline")
var p = flag.String("p", " ", "separator")

func main() {

	var v interface{}
	v = 123
	arr := [] int{1,2,3,4,5}
	k , ok := v.(int)
	fmt.Println(k, ok)
	flag.Parse()
	fmt.Println(strings.Join(flag.Args(), *p))
	fmt.Println(*p, p)
	fmt.Printf("%v \n", arr)
	if !*n {
		fmt.Println("324")
	}
}