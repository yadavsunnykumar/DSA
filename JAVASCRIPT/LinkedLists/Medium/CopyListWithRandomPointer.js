// Copy List with Random Pointer
 // Definition for a _Node.
 function _Node(val, next, random) {
     this.val = val;
     this.next = next;
     this.random = random;
 };

var copyRandomList = function(head) {
    if(!head) return null;
    let map = new Map();

    let current = head;
    while(current){
        map.set(current,new Node(current.val));
        current = current.next;
    }

    current = head;
    while(current){
        map.get(current).next = map.get(current.next) || null;
        map.get(current).random = map.get(current.random) || null;
        current = current.next;
    }
    return map.get(head);
    
};
// Example usage:
let node1 = new _Node(7, null, null);
let node2 = new _Node(13, null, node1);
let node3 = new _Node(11, null, node5);
let node4 = new _Node(10, null, node3);
let node5 = new _Node(1, null, node1);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
let head = node1;
let result = copyRandomList(head);
// Output the result
let output = [];
let current = result;
while (current !== null) {
    output.push({val: current.val, random: current.random ? current.random.val : null});
    current = current.next;
}
console.log(output); // [{val: 7, random: null}, {val: 13, random: 7}, {val: 11, random: 1}, {val: 10, random: 11}, {val: 1, random: 7}]
// The time complexity is O(n) where n is the number of nodes in the linked list.
// The space complexity is O(n) due to the extra space used by the hash map to store the mapping of original nodes to their copies.