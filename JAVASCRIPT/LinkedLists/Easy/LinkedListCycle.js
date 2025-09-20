// Linked List Cycle
//Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return true;
    }
    return false;
    
};
// Example usage:
let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next; // Creates a cycle
console.log(hasCycle(head)); // Output: true
// Example usage without cycle:
let head2 = new ListNode(1);
head2.next = new ListNode(2);
console.log(hasCycle(head2)); // Output: false
