//  Odd Even Linked List
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var oddEvenList = function(head) {
    if (!head || !head.next) return head;

    let odd = head;
    let even = head.next;
    let evenHead = even;

    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;

        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;
    return head;
};
// Example usage:
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let result = oddEvenList(head);
// Output the result
let output = [];
while (result !== null) {
    output.push(result.val);
    result = result.next;
}
console.log(output); // [1, 3, 5, 2, 4]
// The time complexity is O(n) where n is the number of nodes in the linked list.
// The space complexity is O(1) as we are rearranging the nodes in place without using extra space.