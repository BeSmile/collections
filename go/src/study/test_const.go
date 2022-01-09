/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2022-01-04 21:49:12
 * @LastEditors: BeSmile
 * @LastEditTime: 2022-01-05 00:58:11
 */
package main

import (
	"fmt"
	"strings"
	"bytes"
)

func main() {
	const PI float32 = 3.14;
	const PI2 float32 = 3.1415;
	fmt.Printf("PI %v\n", PI)
	fmt.Printf("PI2%v \n", PI2)

	const (
		a = 200
		b = 400
		c
	);
	fmt.Printf("c: %d \n", c);

	const (
		x = iota
		y = 200
		t = 200
		z = iota
	)

	fmt.Println(x,y,z, t);

	arr := []int{1,2,3,4};
	fmt.Println(&arr);

	adult := 0
	if adult >=0 {
		fmt.Println("0o0");
	}

	a16 :=0xF1;
	fmt.Printf("%o\n", a16)
	s := strings.Join([]string{"hello", "world"}, ",");
	fmt.Println(s)

	var buffer bytes.Buffer
	buffer.WriteString("tom");
	buffer.WriteString(",");
	buffer.WriteString("20");

	fmt.Printf("buffer.String(): %v\n", buffer.String());

	s1 := "hello world"

	fmt.Println(s1[0:])
	fmt.Println(s1[:3])

	t1 := [...]bool{1: true, 5:false};
	fmt.Println(t1);

	t2 := make([]int , 10);
	fmt.Println(t2);

	t3 := []int{1,2,3,4,5,6,7,8,9}
	t4 := append(t3[8:], t3[:3]...);
	fmt.Println(t4)

	var m1 map[string]string;

	m1 = make(map[string]string);

	fmt.Printf("%v", m1);
}