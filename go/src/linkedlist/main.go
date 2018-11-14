package main

import (
	"fmt"
	"log"
	"time"
)

type Object interface{}

type Node struct {
	object Object
	next   *Node
}

type List struct {
	size uint64
	head *Node
	tail *Node
}

type ListModel interface {
	init()
	insert(object Object) uint64
	get(index int) Object
	delete(index int) bool
	length() int
}

func (list *List) init() {
	(*list).size = 0
	(*list).head = nil
	(*list).tail = nil
}

func (list *List) insert(object Object) uint64 {
	head := (*list).head
	tail := (*list).tail
	size := (*list).size
	node := &Node{object: object, next: nil}

	//判断head是否为nil
	if head != nil {
		(*tail).next = node
		(*list).size++
	} else {
		(*list).head = node
		(*list).size = 1
	}
	(*list).tail = node

	return size
}

func (list *List) get(index int) Object {
	if int(list.size) <= index {
		return -1
	}
	current := (*list).head
	for i := 0; i <= index; i++ {
		if i == index {
			return current.object
		} else {
			current = current.next
		}
	}
	return -1
}

func (list *List) length() int {
	return int(list.size)
}

func (list *List) delete(index int) bool {
	if list.length() <= index {
		return false
	}
	if index == 0 {
		(*list).head = (*list).head.next
	} else {
		//删除尾部
		if (*list).length()-1 == index {
			(*list).tail = nil
		}
		current := (*list).head
		old := (*list).head
	loop:
		for i := 0; i <= index; i++ {
			if i == index {
				(*old).next = old.next.next
				break loop
			} else {
				old = current
				current = current.next
			}
		}
	}

	(*list).size--
	return true
}

func newLinkedList() ListModel {
	list := new(List)
	list.init()
	return list
}

func main() {
	fmt.Println(time.Now())
	list := newLinkedList()
	list.insert(1)
	list.insert(1)
	list.insert(1)
	list.insert(1)
	list.insert("我是好好嘻嘻")
	list.insert("there are so beautiful")
	list.insert("there are so beautiful")
	list.insert("there are so beautiful")
	list.insert("there are so beautiful")
	list.insert("there are so beautiful")
	list.delete(0)
	log.Println("删除下标0之后的长度是：", list.length())
	log.Println("下标为1的结果", list.get(1))
	fmt.Println(time.Now())
}
