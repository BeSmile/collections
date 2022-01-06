// 判断是否是3的冥
// 给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。
package main
import "fmt"
func isPowerOfThree(n int) bool {
    return n > 0 && 1162261467%n == 0
}

func main() {
	fmt.Println(isPowerOfThree(9))
}