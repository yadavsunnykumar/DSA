// Remove Nth Node From End of List
//Definition for singly-linked list.
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0,head);
    let slow = dummy;
    let fast = dummy;

    for(let i=0; i<=n; i++){
        fast = fast.next;
    }

    while(fast){
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    return dummy.next;
    
};

// Example usage:
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let n = 2;
let result = removeNthFromEnd(head, n);
// Output the result
let output = [];
while (result !== null) {
    output.push(result.val);
    result = result.next;
}
console.log(output); // [1, 2, 3, 5]
// The time complexity is O(L) where L is the length of the linked list.   
// The space complexity is O(1) as we are using only a constant amount of extra space.