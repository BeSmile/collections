package main

import "fmt"

type Currency int
const (
	USD Currency = iota // 美元
	EUR // 歐元
	GBP // 英鎊
	RMB // 人民幣
)


func real(a, b, c, d, e int) {
	fmt.Printf("%d, %d, %d, %d, %d \n", a, b, c, d, e)
}

func main() {
	var a [3]int
	q := [...]int {1,2,3,4,5}
	fmt.Printf("%v \n", a)
	fmt.Printf("%v \n", q)

	symbol := [...]string{USD: "$", EUR: "€", GBP: "£", RMB: "¥"}
	fmt.Println(RMB, symbol[RMB])
}
