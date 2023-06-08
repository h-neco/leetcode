/*
 * @lc app=leetcode id=1342 lang=typescript
 *
 * [1342] Number of Steps to Reduce a Number to Zero
 */

// @lc code=start
function numberOfSteps(num: number): number {
    let count = 0;
    while(num > 0) {
        if(num % 2 === 0) {
            num = num / 2;
        } else {
            num = num - 1;
        }
        count++;
    }
    return count;
};
// numberOfSteps(20);
// @lc code=end

