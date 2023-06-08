/*
 * @lc app=leetcode id=876 lang=typescript
 *
 * [876] Middle of the Linked List
 */
// @lc code=start
interface ListNode {
    val: number;
    next: ListNode | null;
}

function middleNode(head: ListNode | null): ListNode | null {
    if (head === null) return null;
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;
    }
    return slow;
}
//const data = {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: null }}}}};
//console.log(middleNode(data));
// @lc code=end