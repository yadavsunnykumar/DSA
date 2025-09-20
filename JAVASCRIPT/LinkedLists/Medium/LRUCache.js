// LRU Cache
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

LRUCache.prototype.get = function(key) {
    if(!this.cache.has(key)) return -1;
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key,value)
    return value
};

LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)){
        this.cache.delete(key)
    }else if(this.cache.size === this.capacity){
        let oldestKey = this.cache.keys().next().value
        this.cache.delete(oldestKey)

    }
    this.cache.set(key,value)
};

 
// Your LRUCache object will be instantiated and called as such:
 var obj = new LRUCache(capacity)
 var param_1 = obj.get(key)
 obj.put(key,value)

// Time Complexity: O(1) for both get and put operations.
// Space Complexity: O(capacity) for storing the cache entries.
// Example usage:
    let lruCache = new LRUCache(2);
    lruCache.put(1, 1); // cache is {1=1}
    lruCache.put(2, 2); // cache is {1=1, 2=2}
    console.log(lruCache.get(1));    // return 1
    lruCache.put(3, 3); // evicts key 2, cache is {1=1, 3=3}
    console.log(lruCache.get(2));    // returns -1 (not found)
    lruCache.put(4, 4); // evicts key 1, cache is {4=4, 3=3}
    console.log(lruCache.get(1));    // return -1 (not found)
    console.log(lruCache.get(3));    // return 3
    console.log(lruCache.get(4));    // return 4