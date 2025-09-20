// Implement Queue using Stacks
var MyQueue = function() {
    this.stackIn =[];
    this.stackOut =[];
};


MyQueue.prototype.push = function(x) {
    this.stackIn.push(x);
};


MyQueue.prototype.pop = function() {
    if (this.stackOut.length === 0) {
            while (this.stackIn.length > 0) {
                this.stackOut.push(this.stackIn.pop());
            }
        }
        return this.stackOut.pop();
};


MyQueue.prototype.peek = function() {
    if (this.stackOut.length === 0) {
            while (this.stackIn.length > 0) {
                this.stackOut.push(this.stackIn.pop());
            }
        }
        return this.stackOut[this.stackOut.length -1];
};


MyQueue.prototype.empty = function() {
    return this.stackIn.length === 0 && this.stackOut.length === 0;
};


//Your MyQueue object will be instantiated and called as such:
var obj = new MyQueue()
    obj.push(x)
    var param_2 = obj.pop()
    var param_3 = obj.peek()
    var param_4 = obj.empty()
 

// Example 1:
// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]
// Explanation
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost element is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false
