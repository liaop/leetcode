package leetcode

/*
 * @lc app=leetcode id=5 lang=golang
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
func LongestPalindrome(s string) string {
	max := 0
	longest := ""
	for x := 0; x < len(s); x++ {
		even, l := center(s, x, x)
		if l > max {
			longest = even
			max = l
		}
		odd, l := center(s, x, x+1)
		if l > max {
			longest = odd
			max = l
		}
	}
	return longest
}

func center(s string, i, j int) (string, int) {
	var left, right int = i, j
	if i == j {
		left = i - 1
		right = i + 1
	}
	for x := 0; x < len(s)/2; x++ {
		if left < 0 || right >= len(s) || s[left] != s[right] {
			break
		}
		left--
		right++
	}
	return s[left+1 : right], right - left - 1
}

// @lc code=end
