// Middle of the Linked List
 //Definition for singly-linked list.
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}
var middleNode = function(head) {
    let slow = head
    let fast = head

    while(fast !==null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};
// Example usage:
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(middleNode(head)); // Output: Node with value 3
const head2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
console.log(middleNode(head2)); // Output: Node with value 4