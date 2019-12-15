/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)
};
// @lc code=end

