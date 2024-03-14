/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function mergeTwoLists(list1: ListNode, list2: ListNode) {
  // 新しい連結リストの先頭を示すノードの初期化
  const dummy = new ListNode(-1);
  let current = dummy;

  // 2つのリストを走査しながらマージする
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next!;
    } else {
      current.next = list2;
      list2 = list2.next!;
    }
    current = current.next!;
  }

  // どちらかのリストが残っている場合、残りのノードを連結する
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  // マージされたリストの先頭ノードを返す
  return dummy.next;
}
function test() {
  const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  console.log(mergeTwoLists(l1, l2));
}
test();
// @lc code=end
