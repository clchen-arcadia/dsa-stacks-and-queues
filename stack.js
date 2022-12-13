/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = { next: null };
  size = 0;

  constructor() { this._array = []; }

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {
    this._array.push(val);

    this.size = this._array.length;
    this.top.val = this._array[this._array.length - 1];
    if (this._array.length > 1) {
      this.top.next = { val: this._array[this._array.length - 2] };
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this._array.length === 0) throw new Error();

    const output = this._array.pop();

    this.size = this._array.length;
    this.top.val = this._array[this._array.length - 1];
    if (this._array.length > 1) {
      this.top.next = { val: this._array[this._array.length - 2] };
    } else {
      this.top.next = null;
    }

    return output;
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    return this._array[this._array.length - 1];
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this._array.length === 0;
  }
}

module.exports = Stack;
