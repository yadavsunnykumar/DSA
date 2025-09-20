// Reverse Nodes in k-Group
 //Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

var reverseKGroup = function(head, k) {
    let count = 0
    let ptr = head

    while(ptr && count <k){
        ptr = ptr.next
        count++
    }
    
        if(count === k){
        let prev = null
        let current = head
        let next = null

        for(let i= 0; i<k;i++){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        head.next = reverseKGroup(current,k)
        return prev
    }
    return head
};

// Time Complexity: O(N) where N is the number of nodes in the linked list.
// Space Complexity: O(N/k) due to the recursion stack, where k is the group size.
// Example usage:
let list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let k = 2;
let result = reverseKGroup(list, k);
// The result will be the head of the modified linked list.
// For k = 2, the linked list will be reversed in pairs: 2 -> 1 -> 4 -> 3 -> 5
// For k = 3, the linked list will be reversed in triplets: 3 -> 2 -> 1 -> 4 -> 5
console.log(result);
// Output the reversed list
while(result){
    console.log(result.val);
    result = result.next;
}
