/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  // 文字列を配列に変換
  const sArray = s.split("");
  // 空の配列を用意
  let stack: string[] = [];
  // 配列をループ
  for (let i = 0; i < sArray.length; i++) {
    // 配列の要素が'(' or '{' or '['の場合はstackに追加
    if (sArray[i] === "(" || sArray[i] === "{" || sArray[i] === "[") {
      stack.push(sArray[i]);
    } else {
      // stackが空の場合はfalse
      if (stack.length === 0) {
        return false;
      }
      // 配列の要素が')' or '}' or ']'の場合はstackから要素を削除
      if (sArray[i] === ")" && stack.pop() !== "(") {
        return false;
      }
      if (sArray[i] === "}" && stack.pop() !== "{") {
        return false;
      }
      if (sArray[i] === "]" && stack.pop() !== "[") {
        return false;
      }
    }
  }
  if (stack.length !== 0) return false;
  return true;
}

function test() {
  if (isValid("()")) {
    console.log("true");
  }
  if (isValid("()[]{}")) {
    console.log("true");
  }
  if (!isValid("(]")) {
    console.log("true");
  }
  if (!isValid("([)]")) {
    console.log("true");
  }
  if (isValid("{[]}")) {
    console.log("true");
  }
}

// @lc code=end
