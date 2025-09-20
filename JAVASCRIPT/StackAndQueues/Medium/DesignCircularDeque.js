// Design Circular Deque
var MyCircularDeque = function(k) {
    this.capacity = k;
    this.dequeue = [];
};

MyCircularDeque.prototype.insertFront = function(value) {
    if(this.isFull()) return false;
    this.dequeue.unshift(value);
    return true;
};

MyCircularDeque.prototype.insertLast = function(value) {
    if(this.isFull()) return false;
    this.dequeue.push(value);
    return true;
};
MyCircularDeque.prototype.deleteFront = function() {
    if(this.isEmpty()) return false;
    this.dequeue.shift();
    return true;
};
MyCircularDeque.prototype.deleteLast = function() {
    if(this.isEmpty()) return false;
    this.dequeue.pop();
    return true;
};

MyCircularDeque.prototype.getFront = function() {
    if(this.isEmpty()) return -1;
    return this.dequeue[0];
};

MyCircularDeque.prototype.getRear = function() {
    return this.isEmpty() ? -1 : this.dequeue[this.dequeue.length -1];
};

MyCircularDeque.prototype.isEmpty = function() {
    return this.dequeue.length === 0;
};

MyCircularDeque.prototype.isFull = function() {
    return this.dequeue.length === this.capacity;
};


//Your MyCircularDeque object will be instantiated and called as such:
var obj = new MyCircularDeque(k)
var param_1 = obj.insertFront(value)
var param_2 = obj.insertLast(value)
var param_3 = obj.deleteFront()
var param_4 = obj.deleteLast()
var param_5 = obj.getFront()
var param_6 = obj.getRear()
var param_7 = obj.isEmpty()
var param_8 = obj.isFull()

// Example usage:
const circularDeque = new MyCircularDeque(3);
console.log(circularDeque.insertLast(1));  // Returns true
console.log(circularDeque.insertLast(2));  // Returns true
console.log(circularDeque.insertFront(3)); // Returns true