package main

import "fmt"

// 使用临时数组 通过长度取余值进行移动
func rotate1(nums []int, k int)  {
	l := len(nums)
	tmp := make([]int, l)
	copy(tmp, nums)
	
	for i := 0; i < l; i++ {
		nums[(i + k) % l] = tmp[i];
	}
}

// 固定末尾一直向右进行移动- 耗时严重
func rotate2(nums []int, k int)  {
	l := len(nums)
	count := 0;
	for {
		if count >= k {
			break;
		}
		last := nums[l -1];
		for i:= l - 1; i >= 1;i-- {
			nums[i] = nums[i-1];
		}
		nums[0] = last;
		count++;
	}
}

func reverse(a []int) {
	for i, n := 0, len(a); i < n/2; i++ {
			a[i], a[n-1-i] = a[n-1-i], a[i]
	}
}

func rotate(nums []int, k int) {
	k %= len(nums)
	fmt.Println(k);
	reverse(nums)
	reverse(nums[:k])
	reverse(nums[k:])
}


func main() {
	// 旋转数组
	a := []int{1,2, 3}
	rotate(a, 5)

	// a := []int{1,2,3,4,5,6,7}
	// rotate(a, 3)

	// a := []int{1}
	// rotate(a, 3)
	// fmt.Println(a);
}