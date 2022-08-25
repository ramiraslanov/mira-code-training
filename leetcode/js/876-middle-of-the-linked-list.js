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

var middleNode = function (head) {
    var curr = head;
    var flat = [];
    while (curr) {
        flat.push(curr);
        curr = curr.next;
    }

    var mid = Math.floor(flat.length / 2);
    return flat[mid];
};
