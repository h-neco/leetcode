/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummyHead = new ListNode(0);
  let currentNode = dummyHead;
  let carry = 0;

  let node1 = l1;
  let node2 = l2;

  while (node1 || node2 || carry !== 0) {
    const val1 = node1 ? node1.val : 0;
    const val2 = node2 ? node2.val : 0;
    const sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10);
    const digit = sum % 10;

    currentNode.next = new ListNode(digit);
    currentNode = currentNode.next;

    if (node1) node1 = node1.next;
    if (node2) node2 = node2.next;
  }
  return dummyHead.next;
}
function test() {
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  console.log(addTwoNumbers(l1, l2));
}
test();
// @lc code=end
