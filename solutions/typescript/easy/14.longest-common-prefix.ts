/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return '';

    for (let i = 0; i < strs[0].length; i++) {
        const current = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== current) {
                return strs[0].slice(0, i); // 最初の文字から異なる文字が出現したらそれまでの接頭辞を返す
            }
        }
    }
    return strs[0]; // 全ての文字列が同じであれば、最初の文字列自体が共通接頭辞になる
};

longestCommonPrefix(["flower","flow","flight"]);

// @lc code=end