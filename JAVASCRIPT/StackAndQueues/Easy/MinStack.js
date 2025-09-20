// Min Stack
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    const min = this.minStack.length === 0 ? val : Math.min(val,this.minStack[this.minStack.length -1]);
    this.minStack.push(min);
};

MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};


//Your MinStack object will be instantiated and called as such:
var obj = new MinStack()
    obj.push(val)
    obj.pop()
    var param_3 = obj.top()
    var param_4 = obj.getMin()

// Example 1:
// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]
// Output
// [null,null,null,null,-3,null,0,-2]
// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2
