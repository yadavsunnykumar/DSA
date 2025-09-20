// Partition List
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

var partition = function(head, x) {
    let beforeHead = new ListNode(0);
    let afterHead = new ListNode(0);

    let before = beforeHead;
    let after = afterHead;

    while(head){
        if(head.val < x){
            before.next = head;
            before = before.next;
        }else{
            after.next = head;
            after = after.next
        }
        head = head.next;
    }
    after.next = null;
    before.next = afterHead.next;
    return beforeHead.next;
};

// Example usage:
let head = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))));
let x = 3;
let result = partition(head, x);
// Output the result
let output = [];
while (result !== null) {
    output.push(result.val);
    result = result.next;
}
console.log(output); // [1, 2, 2, 4, 3, 5]
// The time complexity is O(n) where n is the number of nodes in the linked list.
// The space complexity is O(1) as we are rearranging the nodes in place without using extra space.