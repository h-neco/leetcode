/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  let i = 0; // 重複のない部分の最後のインデックス
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}
// @lc code=end

//console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
