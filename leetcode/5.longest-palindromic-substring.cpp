
/*
 * @lc app=leetcode id=5 lang=cpp
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
class Solution {
public:
    string longestPalindrome(string s) {
        int min = 0;
        int max = 0;

        for (int i=0;i<s.length();i++) {
          int start = 0;
          int end = 0;
          for (int j = s.length(); j > i;j--) {
            if(s[j] != s[i]) {
              if((end-start)>(max-min)) {
              min = start;
              max = end;
              }
              break;
            }
          }
        }
        return s.substr(min, max +1);
    }
};
// @lc code=end

