package main

import (
	"fmt"
	"log"
	"time"
)

func main() {
	fmt.Println(time.Now())
	var str []string
	str = append(str, "wo")
	str = append(str, "wo")
	str = append(str, "wo")
	str = append(str, "wo")
	str = append(str, "我是好好嘻嘻")
	str = append(str, "there are so beautiful")
	str = append(str, "there are so beautiful")
	str = append(str, "there are so beautiful")
	str = append(str, "there are so beautiful")
	str = append(str, "there are so beautiful")
	str = append(str[:1], str[2:]...)
	log.Println("删除下标0之后的长度是：", len(str))
	log.Println("下标为1的结果", str[1])
	fmt.Println(time.Now())
}
