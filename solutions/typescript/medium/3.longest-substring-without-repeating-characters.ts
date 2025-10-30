/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>(); // ウィンドウ内の文字を管理
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    // 重複があれば左を進める
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]); // 新しい文字を追加
    maxLen = Math.max(maxLen, right - left + 1); // 最大長更新
  }

  return maxLen;
}

// @lc code=end

//console.log(lengthOfLongestSubstring("pwwkew")); // 出力: 3
