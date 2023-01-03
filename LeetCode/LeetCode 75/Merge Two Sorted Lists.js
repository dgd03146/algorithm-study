function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  let node = new ListNode();
  const head = node;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      node.next = list2;
      list2 = list2.next;
    } else {
      node.next = list1;
      list1 = list1.next;
    }
    node = node.next;
  }

  if (list1) {
    node.next = list1;
  }
  if (list2) {
    node.next = list2;
  }

  return head.next;
};

console.log(
  mergeTwoLists(
    { val: 1, next: { val: 2, next: { val: 4, next: null } } },
    { val: 1, next: { val: 3, next: { val: 4, next: null } } }
  )
);
