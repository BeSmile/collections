package main

import (
	"fmt"
	"math"
	"strconv"
)

func FloatToInt(x float64) int {

	result, error := strconv.Atoi(fmt.Sprint(x))
	fmt.Println(error)
	return result
}

//二分查找法
func main() {
	print := []int{1, 8, 21, 56, 59, 64, 68, 72, 75, 79, 85, 96, 110, 156, 201, 562}
	search, length := 8, len(print)

	left, right := 0, length
	for search != print[mid] {
		mid := FloatToInt(math.Ceil(float64(length / 2))) //记录中间值
		//小了 记录 最小值的下标
		if print[mid] < search {
			left = mid
			mid = FloatToInt(math.Ceil(float64((right + mid) / 2)))
		} else if print[mid] > search {
			//大了 记录最大值的下标
			right = mid
			mid = FloatToInt(math.Ceil(float64((left + mid) / 2)))
		} else {

			fmt.Println("==", print[mid], mid)
		}

	}
	fmt.Println("要查找的值为%d下标为%d", mid)
}
