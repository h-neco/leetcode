/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
enum RomanToIntMap {
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000,
}

function romanToInt(s: string): number {

    let value = 0;
    for (let i = 0; i < s.length; i++) {
        const current = Number(RomanToIntMap[s[i] as keyof typeof RomanToIntMap]);
        const next = Number(RomanToIntMap[s[i + 1] as keyof typeof RomanToIntMap]);
        if (current < next) {
            value += next - current;
            i++;
        }else{
            value += current;
        }
    }
    return value;
};
// @lc code=end