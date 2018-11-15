package main

import (
	"fmt"
	"strings"
)

func move(x, y int) (int, int) {
	return y, x
}

func arrayToString(a []int, delim string) string {
	return strings.Trim(strings.Replace(fmt.Sprint(a), " ", delim, -1), "[]")
}

/*
   冒泡排序： 每次冒泡获得最大的值 并入最后一位
*/
func main() {
	arr := []int{5, 9, 6, 8, 2}
	for i := 0; i < len(arr); i++ {
		for j := i; j < len(arr); j++ {
			if arr[i] >= arr[j] {
				arr[i], arr[j] = move(arr[i], arr[j])
			}
		}
		fmt.Printf("第 %d 次冒泡，结果为 %s \n", (i + 1), arrayToString(arr, ","))
	}
}
