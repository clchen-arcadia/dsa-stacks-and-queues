const DoublyLinkedList = require("./doubly-linked-list");

/** Node: node for a deque. */

class Node {
  val = null;
  next = null;
  prev = null;

  constructor(val) {
    this.val = val;
  }
}

/** Deque: chained-together nodes where you can
 *  add to the end or beginning and remove from the end or beginning. */
//Double-linked list 
class Deque {
  _first = null;
  _last = null;
  _size = 0;
  _dll = new DoublyLinkedList();

  //Getters
  get first() {
    return this._dll.head;
  }
  
  get last() {
    return this._dll.tail;
  }
  
  get size() {
    return this._dll.length;
  }

  /** appendRight(val): add new value to end of the deque. 
   * Returns undefined. */

  appendRight(val) {
    this._dll.push(val);
    return;
  }

  /** popRight(): remove a node from the end of the deque. 
   * Return it's value.
   * Should throw an error if the deque is empty. */

  popRight() {
    return this._dll.pop()
  }

  /** appendLeft(val): add new value to beginning of the deque. 
   * Returns undefined. */

  appendLeft(val) {
    
  }

  /** popLeft(): remove a node from the beginning of the deque. 
   * Return it's value.
   * Should throw an error if the deque is empty. */

  popLeft() {

  }

  /** peekRight(): return the value of the end node in the deque. */

  peekRight() {

  }

  /** peekLeft(): return the value of the beginning node in the deque. */

  peekLeft() {

  }

  /** isEmpty(): return true if the deque is empty, otherwise false */

  isEmpty() {

  }
}

module.exports = Deque;
