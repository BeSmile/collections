/*
 * @Description:
 * @Version:
 * @Author: BeSmile
 * @Date: 2022-01-09 19:36:24
 * @LastEditors: BeSmile
 * @LastEditTime: 2022-01-09 20:21:31
 */
package main

import (
	"encoding/json"
	"fmt"
	"os"
)

type Person struct {
	Name  string
	Age   int
	Email string
}

type Student struct {
	Name  string
	Age   int
	Email string
	Skill []string
}

func testJson() {
	f, err := os.Open("a.json")
	if err != nil {
		fmt.Println(err)
	}
	defer f.Close()
	d := json.NewDecoder(f)

	// 读取之后会清空数据 底下部分将无法进行读
	var v map[string]interface{}
	d.Decode(&v)

	p2 := new(Student)
	d.Decode(p2)
	fmt.Println(p2, "p2")
}

func main() {
	p := Person{
		Name:  "A",
		Age:   1,
		Email: "l735465519@gmail.com",
	}
	j, _ := json.Marshal(p)
	fmt.Printf("j:%s\n", j)

	b := []byte(`{"Name":"LRY","Age":19,"Email":"l735465519@gmail.com"}`)
	var p1 Person
	json.Unmarshal(b, &p1)
	fmt.Println(p1.Name)
	testJson()
}
