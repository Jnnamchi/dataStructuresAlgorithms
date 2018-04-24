// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(Data, Next = null){
    this.data = Data;
    this.next = Next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  insertFirst(Data){
    this.insertAt(Data, 0);
  }
  size(){
    let counter = 0;
    let node = this.head;
    while(node){
        node = node.next;
        counter++;
    }
    return counter;
  }
  getFirst(){
    return this.getAt(0);
  }
  getLast(){
    return this.getAt(this.size() - 1);
  }
  clear(){
    this.head = null;
  }
  removeFirst(){
    if (!this.head){
      return;
    }
    this.head = this.head.next;
  }
  removeLast(){
    if (!this.head){
      return;
    }
    if (!this.head.next){
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = previous.next;
    while(node.next){
        previous = node;
        node = node.next;
    }
    previous.next = null;
  }
  insertLast(Data){
    if(this.getLast()){
      this.getLast().next = new Node(Data);
    } else {
      this.head = new Node(Data);
    }
  }
  getAt(index){
    let counter = 0;
    let node = this.head;
    while(counter < index){
      if(node){
        node = node.next;
      }
      counter++;
    }
    return node;
  }
  removeAt(index){
    if(!this.head){
      return;
    }
    if(index > 0){
      this.getAt(index-1).next = this.getAt(index + 1);
      return;
    } else {
      this.head = this.head.next;
      return;
    }
  }
  insertAt(Data, index){
    if(!this.head){
      this.head = new Node(Data);
      return;
    }
    if (index === 0) {
      this.head = new Node(Data, this.head);
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(Data, previous.next);
    previous.next = node;
  }
  forEach(fn){
    let counter = 0;
    let node = this.head;
    while(node){
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator](){
    let node = this.head;
    while(node){
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
