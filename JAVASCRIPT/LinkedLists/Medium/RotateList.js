// 61. Rotate List
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var rotateRight = function(head, k) {
    if(!head || !head.next || k===0) return head;

    let length  = 1;
    let tail = head;
    while(tail.next){
        tail = tail.next;
        length++;
    }
    tail.next = head;

    let stepsToNewTail = length - (k%length);
    let newTail = tail;
    while(stepsToNewTail--){
        newTail = newTail.next;
    }

    const newHead = newTail.next;
    newTail.next = null;

    return newHead;
};
// Example usage:
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let k = 2;
let result = rotateRight(head, k);
// Output the result
let output = [];
while (result !== null) {
    output.push(result.val);
    result = result.next;
}
console.log(output); // [4, 5, 1, 2, 3]
// The time complexity is O(n) where n is the number of nodes in the linked list.
// The space complexity is O(1) as we are rearranging the nodes in place without using extra space.
