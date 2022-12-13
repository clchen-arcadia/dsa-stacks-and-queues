
const LinkedList = require("./linked-list");

/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue extends LinkedList {
  /** Under the hood, the data structure being used is a linked list.
   *  Enqueue adds to the head of the LL. Dequeue pops from the tail of the LL.
   */

  first = null; // first in queue is tail of LL
  last = null; // last in queue is head of LL
  size = 0;

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this.unshift(val);

    this.first = this.tail;
    this.last = this.head;
    this.size = this.length;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    const output = this.pop();

    this.first = this.tail;
    this.last = this.head;
    this.size = this.length;

    return output;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.length === 0) return true;
    return false;
  }
}

module.exports = Queue;
