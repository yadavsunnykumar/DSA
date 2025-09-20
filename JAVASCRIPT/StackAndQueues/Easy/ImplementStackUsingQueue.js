// Implement Stack using Queues
var MyStack = function() {
    this.queue1 =[];
    this.queue2 = [];
};

MyStack.prototype.push = function(x) {
    this.queue2.push(x);
    while(this.queue1.length >0){
        this.queue2.push(this.queue1.shift());
    }
    [this.queue1,this.queue2] = [this.queue2,this.queue1];
};

MyStack.prototype.pop = function() {
    return this.queue1.shift();
};

MyStack.prototype.top = function() {
    return this.queue1[0];
};

MyStack.prototype.empty = function() {
    return this.queue1.length === 0;
};
 //Your MyStack object will be instantiated and called as such:
var obj = new MyStack()
    obj.push(x)
    var param_2 = obj.pop()
    var param_3 = obj.top()
    var param_4 = obj.empty()

// Example 1:
// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]
// Explanation
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False
