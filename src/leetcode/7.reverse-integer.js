/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var re = 0
    while (parseInt(x / 10)) {
        re = 10 * re + x % 10
        x = parseInt(x / 10)
    }
    re = 10 * re + x
    if (re > 2147483647 || re < -2147483648) return 0
    return re
}

// @lc code=end

