/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      throw new Error();
    }
    if (this.length === 1) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedNode.val;
    }

    let curr = this.head;
    while (true) {
      if (curr.next === this.tail) {
        const removedNode = curr.next;
        curr.next = null;
        this.tail = curr;
        this.length--;
        return removedNode.val;
      }
      else {
        curr = curr.next;
      }
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      throw new Error();
    }

    const removedNode = this.head;
    this.head = this.head.next;
    if (this.length === 1) {
      this.tail = null;
    }
    this.length--;
    return removedNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx > this.length) throw new Error();

    let counter = idx;
    let curr = this.head;
    while (counter !== 0) {
      curr = curr.next;
      counter--;
    }
    return curr.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length) throw new Error(); // > or >= ??

    let counter = idx;
    let curr = this.head;
    while (counter !== 0) {
      curr = curr.next;
      counter--;
    }
    curr.val = val;
    return curr.val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) throw new Error();

    if (idx === 0) {
      this.unshift(val);
      return;
    }
    if (idx === this.length) {
      this.push(val);
      return;
    }

    let counter = idx - 1;
    let curr = this.head;
    while (counter !== 0) {
      curr = curr.next;
      counter--;
    }

    const newNode = new Node(val);
    newNode.next = curr.next;
    curr.next = newNode;
    this.length++;
    return;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length) throw new Error();

    if (idx === 0) {
      return this.shift();
    }

    let counter = idx - 1;
    let curr = this.head;
    while (counter !== 0) {
      curr = curr.next;
      counter--;
    }

    const removedNode = curr.next;
    curr.next = curr.next.next;
    this.length--;
    return removedNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total = 0;

    let curr = this.head;
    while (curr !== null) {
      total += curr.val;
      curr = curr.next;
    }

    return total / this.length;
  }

  /** reverseInPlace(): Reverse and return a linked list in place */

  reverseInPlace() {
    if (this.length === 0 || this.length === 1) {
      return;
    }

    let curr = this.head; //head is a. curr is assigned value "a"
    let prev = curr;      //prev is assigned value "a"
    let next = curr.next; //next is assigned value "b"
    this.tail = curr;     //this.tail is reassigned value "a"

    curr.next = null;     //"a" Node points to null

    //Before checking with loop condition
    curr = next;          //curr is "a". next is "b". curr is reassigned to "b"
    next = curr.next;     //next is "b". curr.next points to "c". next is reassigned to c

    while (next !== null) {
      curr.next = prev;
      //curr.next points to "c". prev is "a". curr.next points in reverse to "a"
      //this is to switch the arrow

      prev = curr;      //prev was "a". curr is "b". Move pointers up. prev is now "b"
      curr = next;      //curr was "b". next is "c". curr is reassigned to "c"
      next = curr.next; //next was "c". curr.next is "d" because changed on previous line.
      //next is reassigned to "d"
    }

    //At the end of linked list
    curr.next = prev;   //curr.next was "null". prev is "e". curr.next was reversed to point to "e"
    this.head = curr;   //this.head was "a". curr is "f". head is reassigned to "f"

  }
}

module.exports = LinkedList;
