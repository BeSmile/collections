package main

// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x248f5/
// 存在重复元素
import (
	"fmt"
	"sort"
)
func containsDuplicate1(nums []int) bool {
	cts := false
	cache := make(map[int]bool)
	for _, key := range nums {
		if cache[key] {
			cts = true;
			break;
		} else {
			cache[key] = true;
		}
	}
	return cts;
}


func containsDuplicate(nums []int) bool {
	sort.Ints(nums)
	for i := 1; i < len(nums); i++ {
			if nums[i] == nums[i-1] {
					return true
			}
	}
	return false
}

func containsDuplicate(nums []int) bool {
	sort.Ints(nums);// 进行排序
	for i := 1; i < len(nums); i++ {
		if nums[i] == nums[i-1] {
			return true
		}
	}
	return false
}

//存在重复元素 
func main() {
	// 
	arr := []int{1,1,1,3,3,4,3,2,4,2}
	fmt.Println(containsDuplicate(arr))
}