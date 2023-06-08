/*
 * @lc app=leetcode id=1662 lang=typescript
 *
 * [1662] Check If Two String Arrays are Equivalent
 */

// @lc code=start
function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {

    const word1Str = word1.join('');
    const word2Str = word2.join('');
    if (word1Str === word2Str) {
        return true;
    }else{
        return false;
    }
};
const word1: string[] = ["ab", "c","efgh"];
const word2: string[] = ["a", "bc","e","fgh"];
arrayStringsAreEqual(word1, word2);

// @lc code=end