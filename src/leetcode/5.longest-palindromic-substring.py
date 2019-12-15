#
# @lc app=leetcode id=5 lang=python3
#
# [5] Longest Palindromic Substring
#


# @lc code=start
class Solution:
    def longestPalindrome(self, s: str) -> str:
        if (not s or len(s) == 1):
            return s
        n = len(s)
        start = 0
        end = 0

        for i in range(n):
            len1 = self.expand(s, i, i)
            len2 = self.expand(s, i, i + 1)
            len_long = max(len1, len2)
            if (len_long > end - start):
                start = i - (len_long - 1) // 2
                end = i + (len_long) // 2
        return s[start:end + 1]

    def expand(self, s, l, r):
        while 0 <= l and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        return r - l - 1


# @lc code=end
