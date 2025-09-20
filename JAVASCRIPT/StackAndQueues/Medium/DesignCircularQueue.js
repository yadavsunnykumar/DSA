// Design Circular Queue
var MyCircularQueue = function(k) {
    this.queue = new Array(k);
    this.size = k;
    this.head =0;
    this.tail = -1;
    this.count = 0;

};
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) return false;
    this.tail = (this.tail +1) % this.size;
    this.queue[this.tail] = value;
    this.count++;
    return true;
};
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) return false;
    this.head = (this.head +1) % this.size;
    this.count--;
    return true;
};
MyCircularQueue.prototype.Front = function() {
    return this.isEmpty() ? -1 : this.queue[this.head];
};
MyCircularQueue.prototype.Rear = function() {
    return this.isEmpty() ? -1 : this.queue[this.tail];
};
MyCircularQueue.prototype.isEmpty = function() {
    return this.count === 0;
};
MyCircularQueue.prototype.isFull = function() {
    return this.count === this.size;
};


// Your MyCircularQueue object will be instantiated and called as such:
var obj = new MyCircularQueue(k)
var param_1 = obj.enQueue(value)
var param_2 = obj.deQueue()
var param_3 = obj.Front()
var param_4 = obj.Rear()
var param_5 = obj.isEmpty()
var param_6 = obj.isFull()

// Example usage:
const circularQueue = new MyCircularQueue(3);
console.log(circularQueue.enQueue(1));  // Returns true
console.log(circularQueue.enQueue(2));  // Returns true
console.log(circularQueue.enQueue(3));  // Returns true
console.log(circularQueue.enQueue(4));  // Returns false, queue is full