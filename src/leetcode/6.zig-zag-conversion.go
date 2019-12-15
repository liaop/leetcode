/*
 * @lc app=leetcode id=6 lang=golang
 *
 * [6] ZigZag Conversion
 */

// @lc code=start
func convert(s string, numRows int) string {
	if numRows == 1 {
	return s
}
b := numRows - 1
strArr := make([]string, numRows)
for k, v := range s {
	if (k/b)%2 == 0 {
		strArr[k%b] += string(v)
	} else {
		strArr[b-(k%b)] += string(v)
	}
}
return strings.Join(strArr,"")
}
// @lc code=end

