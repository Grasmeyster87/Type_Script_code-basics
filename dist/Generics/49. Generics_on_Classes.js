var Queue = (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.enqueue = function (element) {
        this.data.push(element);
    };
    Queue.prototype.dequeue = function () {
        if (this.data.length === 0) {
            throw new Error('Queue is empty');
        }
        return this.data.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(1);
queue.dequeue();
queue.dequeue();
//# sourceMappingURL=49.%20Generics_on_Classes.js.map