/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    var list = new ListNode();
    var node1 = l1;
    var node2 = l2;
    var node3 = list;

    while (node3) {
        var sum = (node1?.val || 0) + (node2?.val || 0) + node3.val;
        var isSumGreater10 = sum >= 10;

        node3.val = sum % 10;
        node1 = node1?.next;
        node2 = node2?.next;
        node3.next = node1 || node2 || isSumGreater10 ? new ListNode(+isSumGreater10) : null;
        node3 = node3?.next;
    }

    return list;
};
