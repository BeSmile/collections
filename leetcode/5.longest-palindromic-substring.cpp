

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
        int maxLen = 0;
        for (int start=0;start<s.length();start++) {
          int end = s.length() - 1;
          for (int j = s.length() -1; j > start;j--) {

            int offset = end - j;
            int oEnd = s[end - offset];
            int oStart = s[start + offset];
            if(oEnd == oStart) {
              if(maxLen < offset) {
                min = start;
                max = start + offset;
                cout << offset << "-" << min << ":" << max << endl;

              }
            } else {
              // max = 0;
              end--;
            }
          }
        }
        return s.substr(min, max - min);
    }
};
// @lc code=end

