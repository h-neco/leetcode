/*
 * @lc app=leetcode id=1480 lang=typescript
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
function runningSum(nums: number[]): number[] {
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
}
//const test: number[] = [1, 2, 5, 7];
//console.log(runningSum(test));
// @lc code=end
