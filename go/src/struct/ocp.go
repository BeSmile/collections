/*
 * @Description:
 * @Version:
 * @Author: BeSmile
 * @Date: 2022-01-06 00:49:13
 * @LastEditors: BeSmile
 * @LastEditTime: 2022-01-06 00:53:33
 */
package main

import "fmt"

type Pet interface {
	eat()
	sleep()
}

type Dog struct {
}

type Cat struct {
}

type Person struct {
}

func (dog Dog) eat() {
	fmt.Println("dog eat...")
}

func (dog Dog) sleep() {
	fmt.Println("dog sleep...")
}

func (cat Cat) eat() {
	fmt.Println("cat eat...")
}
func (cat Cat) sleep() {
	fmt.Println("cat eat...")
}

func (person Person) care(pet Pet) {
	pet.eat()
	pet.sleep()
}

func main() {
	dog := Dog{}
	cat := Cat{}
	person := Person{}
	person.care(dog)
	person.care(cat)
}
