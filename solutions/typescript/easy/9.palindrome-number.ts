/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {

    if (x < 0) return false;
    if (x < 10) return true;
    let result = false;
    const reverse = Number(String(x).split('').reverse().join(''));
    if (x === reverse){
        result = true;
    }
    return result
};
// @lc code=end