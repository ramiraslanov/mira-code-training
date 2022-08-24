/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
var middleNode = function (head) {
    var curr = head;
    var flat = [];
    while (curr) {
        flat.push(curr);
        curr = curr.next;
    }

    var mid = flat.length / 2;
    return flat[mid + +(!flat.length % 2)];
};

console.log(
    middleNode(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))
);
