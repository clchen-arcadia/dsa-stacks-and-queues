
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

class Queue {
  /** Under the hood, the data structure being used is a linked list.
   *  Enqueue adds to the head of the LL. Dequeue pops from the tail of the LL.
   */

  first = null; // first in queue is tail of LL
  last = null; // last in queue is head of LL
  size = 0;
  _list = new LinkedList();

  //with .first, instead of looking for property, will retrieve this getter. 
  //Replaces this.first = this._list.tail

  get first() {
    return this._list.head;
  }
  
  get last() {
    return this._list.tail;
  }
  
  get size() {
    return this._list.length;
  }

  /**
   * 
   */
  set first(val) {
    this.first = val;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._list.unshift(val);

    this.first = this._list.tail;
    this.last = this._list.head;
    this.size = this._list.length;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    const output = this._list.pop();

    this.first = this._list.tail;
    this.last = this._list.head;
    this.size = this._list.length;

    return output;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size === 0) return null;
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) return true;
    return false;
  }
}

module.exports = Queue;
