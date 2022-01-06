package main
import "fmt"

// 埃氏筛法
// 先，将2到n范围内的所有整数写下来。其中最小的数字2是素数。将表中所有2的倍数都划去。
// 表中剩余的最小数字是3，它不能被更小的数整除，所以是素数。再将表中所有3的倍数全都划去。
// 依次类推，如果表中剩余的最小数字是m时，m就是素数。然后将表中所有m的倍数全部划去。像这样反复操作，就能依次枚举n以内的素数。
func countPrimes(n int) int {
	h := 0;
	// hash := make([]bool);
	arr := make([]bool, n);

	// 减少
	for m:=2; m < n; m++ {
		if !arr[m] {
			h++;
		}
		// 进行筛选
		for i := 2; m * i < n; i++ {
			// 进行数组标记
			arr[m * i] = true;
		}
	}
	return h;
}

func main() {
	fmt.Println(countPrimes(120))
}))
}