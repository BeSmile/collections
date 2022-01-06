// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnhhkv/
// 旋转图像
package main

import (
	"fmt"
	"math"
)

// 左右交换，再对角线交换
func rotate(matrix [][]int)  {
	l := len(matrix);
	s := int(math.Floor(float64(l) / 2))
	// fmt.Println(s)
	// 进行左右翻转
	for i := 0; i < l; i++ {
		for j := 0; j < s; j++ {
			matrix[i][j], matrix[i][l - j -1] =  matrix[i][l - j -1],matrix[i][j];
		}
	}
	// fmt.Println(matrix)
	// 进行对角线翻转
	for i := 0; i < l; i++ {
		for j := 0; j < l - i - 1; j++ {
			matrix[i][j], matrix[l-j-1][l-i-1] = matrix[l-j-1][l-i-1], matrix[i][j];
		}
	}
}

// 还有一种直接交换法
// 中心位置进行旋转

func main() {
	// a := [][]int{{1,2,3}, {4,5,6}, {7,8,9}}
	// a := [][]int{{1}};
	// a := [][]int{{5,1,9,11},{2,4,8,10},{13,3,6,7},{15,14,12,16}}
	a := [][]int{{1,2}, {3,4}}

	rotate(a)
	fmt.Println(a)
}