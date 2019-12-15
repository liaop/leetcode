package leetcode

func TwoSum(nums []int, target int) []int {
	lookup := make(map[int]int)
	for i, v := range nums {
		j, ok := lookup[v]
		lookup[target-v] = i
		if ok {
			return []int{j, i}
		}
	}
	return []int{}
}
