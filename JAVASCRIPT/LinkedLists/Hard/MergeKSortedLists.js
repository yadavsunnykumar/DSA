// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
// Definition for singly-linked list.
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

class minHeap{
    constructor(){
        this.heap = [];
    }
    push(node){
        this.heap.push(node)
        this.heap.sort((a,b) => a.val - b.val)
    }
    pop(){
        return this.heap.shift();
    }
    isEmpty(){
        return this.heap.length === 0
    }
 }
var mergeKLists = function(lists) {
    let heap = new minHeap()
    for(let node of lists){
        if(node) heap.push(node)
    }

    let dummy = new ListNode(0)
    let current = dummy

    while(!heap.isEmpty()){
        let node = heap.pop()
        current.next = node
        current = current.next
        if(node.next) heap.push(node.next)
    }
    return dummy.next
};

// Time Complexity: O(N log k) where N is the total number of nodes and k is the number of linked lists.
// Space Complexity: O(k) for the heap.
// Example usage:
let list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let list3 = new ListNode(2, new ListNode(6));