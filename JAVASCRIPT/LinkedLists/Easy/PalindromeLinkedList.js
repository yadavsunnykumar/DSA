//  Palindrome Linked List
 //Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var isPalindrome = function(head) {
    if(!head || !head.next) return true;
    // step 1: find the middle of the list
    let slow = head, fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    // step 2: reverse the half list
    let prev = null;
    while(slow){
        let nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }

    // step 3: compare two list now
    let left = head,right = prev;
    while(right){
    if(left.val !== right.val) return false;
    left = left.next;
    right = right.next;
    }
    return true;
    
};
// Example usage:
let head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
console.log(isPalindrome(head)); // Output: true
let head2 = new ListNode(1, new ListNode(2));
console.log(isPalindrome(head2)); // Output: false