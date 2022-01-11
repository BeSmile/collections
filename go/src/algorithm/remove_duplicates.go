package main

import "fmt"

func removeDuplicates(nums []int) int {
  if len(nums) == 0{
    return 0;
  }
  var left, right int = 0, 1;
  for ; right < len(nums); right++ {
    if(nums[left] != nums[right]) {
      left++;
      nums[left] = nums[right];
    } else {
      continue;
    }
  }
  return left + 1;
}

func main() {
  var lists = []int{0,0,1,1,1,2,2,3,3,4};
  var l = removeDuplicates(lists);
  fmt.Println(l, lists);
}