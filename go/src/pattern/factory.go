/*
 * @Description:
 * @Version:
 * @Author: BeSmile
 * @Date: 2022-01-11 22:06:55
 * @LastEditors: BeSmile
 * @LastEditTime: 2022-01-12 00:01:33
 */
package main

import "fmt"

type IOperation interface {
	GetResult() int
}

type Operation struct {
	NumberA int
	NumberB int
}

type OperationAdd struct {
	Operation
}

func (oa OperationAdd) GetResult() int {
	return oa.NumberA + oa.NumberB
}

type OperationMinus struct {
	Operation
}

func (om OperationMinus) GetResult() int {
	return om.NumberA - om.NumberB
}

type OperationAddFactory struct {
}

func (of OperationAddFactory) CreateOperation() OperationAdd {
	return OperationAdd{}
}

func main() {
	var b OperationAdd
	fo := OperationAddFactory{}

	b = fo.CreateOperation()
	b.NumberA = 100
	b.NumberB = 49
	fmt.Println(b)
	// fo := OperationFactory{}

	// var io IOperation

	// co := fo.CreateOperation("add")
	// co.Operation = &Operation{
	// 	NumberA: 100,
	// 	NumberB: 5,
	// }

	// io = co
	// fmt.Println("io", io, io.GetResult())

	fmt.Println(b.GetResult())
}
