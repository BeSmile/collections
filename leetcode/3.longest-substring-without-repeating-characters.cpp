/*
 * @lc app=leetcode id=3 lang=cpp
 *
 * [3] Longest Substring Without Repeating Characters
 */
// @lc code=start
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        map<char, int> dict = {};
        map<char,int>::iterator it;
        int maxLen = 0;
        // if(s == " ") return 1;
        int start = 0;// 滑动窗口的起点位置
        for (int i = 0; i<s.length();i++) {
          char chr = s[i];
          // 找到位置
          it = dict.find(chr);
          if(it != dict.end()) {
            start = max(start, dict[chr] + 1);// 更新滑动窗口的位置
          }
          dict[chr] = i;
          maxLen = max(maxLen, i- start + 1);
        }
        return maxLen;
    }
};
// @lc code=end

