package main

import (
	"fmt"
	. "leetcode"
)

func main() {
	fmt.Println("第一题:")
	var arr = []int{7, 53, 2, 45, 21, 5, 78, 43}
	var rt = TwoSum(arr, 9)
	fmt.Println(rt)
	fmt.Println("第二题:")
	var l1 = GetList([]int{2, 4, 3})
	var l2 = GetList([]int{5, 6, 4})
	var list = AddTwoNumbers(l1, l2)
	for list.Next != nil {
		fmt.Println(list.Val)
		list = list.Next
	}
	fmt.Println("第三题:")
	var max = LengthOfLongestSubstring("sdfshvytfytas'")
	fmt.Println(max)
	fmt.Println("第四题:")
	var lf1 = []int{7, 9, 12, 42, 58, 79}
	var lf2 = []int{1, 5, 7, 9, 33, 67, 73}
	var dl = FindMedianSortedArrays(lf1, lf2)
	fmt.Println(dl)
	fmt.Println("第五题:")
	var str  = LongestPalindrome("babadsfdsgdfasdsgsdd")
	fmt.Println(str)
}
