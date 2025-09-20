// Swap Nodes in Pairs
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var swapPairs = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    while(head && head.next){
        let first = head;
        let second = head.next;

        // swapping;
        prev.next = second;
        first.next = second.next;
        second.next = first;

        prev = first;
        head = first.next;
    }
    return dummy.next;
};
// Example usage:
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
let result = swapPairs(head);
// Output the result
let output = [];
while (result !== null) {
    output.push(result.val);
    result = result.next;
}
console.log(output); // [2, 1, 4, 3]
// The time complexity is O(n) where n is the number of nodes in the linked list.
// The space complexity is O(1) as we are swapping the nodes in place without using extra space.