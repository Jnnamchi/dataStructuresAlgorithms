// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(Data){
    this.data = Data;
    this.children = [];
  }
  add(Data){
    this.children.push(new Node(Data));
  }
  remove(child){
    this.children = this.children.filter(node => {
      return node.data !== child;
    });
  }
}

class Tree {
  constructor(){
    this.root = null;
  }
  traverseBF(fn){
    const arr = [this.root];
    while(arr.length){
      const node = arr.shift();
      fn(node);
      arr.push(...node.children);
    }
  }
  traverseDF(fn){
    const arr = [this.root];
    while(arr.length){
      const node = arr.shift();
      fn(node);
      arr.unshift(...node.children);
    }
  }
}

module.exports = { Tree, Node };
