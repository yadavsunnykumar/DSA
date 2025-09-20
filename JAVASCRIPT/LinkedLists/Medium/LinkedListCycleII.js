// Linked List Cycle II
// Definition for singly-linked list.
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

var detectCycle = function(head) {
    let slow = head
    let fast = head
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next

        if(slow === fast){
            let entry = head
            while(entry !== slow){
                entry = entry.next
                slow = slow.next
            }
            return entry
        }
    }
    return null
};
// Time Complexity: O(N) where N is the number of nodes in the linked list.
// Space Complexity: O(1) as we are using only two pointers.
// Example usage:
let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates a cycle here
let cycleStartNode = detectCycle(node1);
if (cycleStartNode) {
    console.log("Cycle starts at node with value:", cycleStartNode.val); // Output: Cycle starts at node with value: 2
}
else {
    console.log("No cycle detected.");
}
// Output: Cycle starts at node with value: 2
// If there was no cycle, it would output: No cycle detected.
// The cycle starts at the node with value 2.   