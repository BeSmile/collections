package main

import (
	"fmt"
	"reflect"
)

func main() {
	fmt.Println(reflect.TypeOf(1))
	f := 2
	b := reflect.ValueOf(&f)
	c := b.Elem()
	c.SetInt(684)
	v := reflect.ValueOf("dsf")
	fmt.Print(v, v.Type(), b, c.CanAddr(), c)
}
