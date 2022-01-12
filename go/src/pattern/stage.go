package main

import "fmt"

type AddFactory struct {

}

// 创建一个添加操作符的工厂
func NewAddFactory() *AddFactory {
	return &AddFactory{}
}

type Operator struct {
	NumberA int;
	NumberB int;
}

// 添加字符集
type OperatorAdd struct {
	Operator
}

func (af AddFactory) CreateOperator() *OperatorAdd {
	return &OperatorAdd{};
}

// 获取结果
func (oa *OperatorAdd) GetResult() int {
	return oa.NumberA + oa.NumberB;
}

// 定义策略接口，约束获取结果函数
type Strategy interface{
	GetResult() int;
}

// 定义一个context
type Context struct {
	strategy Strategy;
}

// 初始化策略Context
func NewContext(strategy Strategy) *Context {
	return &Context{
		strategy,
	}
}

// 执行策略代码
func (c *Context) ExecuteStrategy() int {
	return c.strategy.GetResult()
}

//
func main() {
	// 创建工厂
	af := NewAddFactory();
	// 创建操作符
	co := af.CreateOperator();
	co.NumberA = 10
	co.NumberB = 129
	// 创建context内容
	c := NewContext(co);

	v := c.ExecuteStrategy()

	fmt.Println(v);
}