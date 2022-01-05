//https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2ba4i/
//移动零
package main

import "fmt"

func moveZeroes1(nums []int)  {
	l := len(nums);
	for i := 0; i < l; i++ {
		if nums[i] != 0 {
			continue
		}
		for j := i; j < l; j++ {
			if(nums[j] != 0) {
				nums[i], nums[j] = nums[j], nums[i];
				break;
			}
		}
	}
}

// 记录有值的下标然后进行交换, 首位非0原地交换
func moveZeroes(nums []int)  {
	l := len(nums);
	low := 0;
	for i := 0; i < l; i++ {
		if(nums[i] != 0) {
			nums[i], nums[low] = nums[low], nums[i];
			low++;
		}
	}
}

func main() {
	// arr := []int{1, 0,1};
	arr := []int{0, 1, 0, 0 ,3 , 0,12};
	moveZeroes(arr)
	fmt.Println(arr);
}

// 1 0 0 3 12
// 1 3 0 0 12
// 1 3 12 0 0