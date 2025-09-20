
// Remove Linked List Elements
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

var removeElements = function(head, val) {
    let dummy = new ListNode(0,head);
    let current = dummy;
    while(current.next !== null){
        if(current.next.val === val){
            current.next = current.next.next;
        }else{
            current = current.next;
        }
    }
    return dummy.next;
};
// Example usage:
const head = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))));
console.log(removeElements(head, 6)); // Output: [1,2,3,4,5]