/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (!s) return ''
    if (s.length === 1) return s
    if (s.length === 2) return s[0] === s[1] ? s : s[1]
    let maxStr = '', len = s.length

    for (let i = 0; i < len; i++) {
        let even = '', odd = ''
        if (s[i] === s[i + 1]) {
            let evenIndex = center(s, i - 1, i + 2)
            even = s.slice(evenIndex.left, evenIndex.right)
        }
        let oddIndex = center(s, i - 1, i + 1)
        odd = s.slice(oddIndex.left, oddIndex.right)

        let logger = even.length > odd.length ? even : odd
        maxStr = maxStr.length > logger.length ? maxStr : logger
    }
    return maxStr
}

var center = (s, left, right) => {
    let len = s.length
    while (left >= 0 && right < len && s[left] === s[right]) {
        left--
        right++
    }
    return { left: left + 1, right: right }
}
// @lc code=end

