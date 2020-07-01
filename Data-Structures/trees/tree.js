'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(){
    this.root = null;
  }


  preOrder(root){

    console.log(root.value);
    if(root.left !== null) {
      this.preOrder(root.left);
    }
    if(root.right !== null) {
      this.preOrder(root.right);
    }

  }

  inOrder(root){

    if (root.left !== null){
      this.inOrder(root.left);
    }
    console.log(root.value);

    if (root.right !== null){
      this.inOrder(root.right);
    }

    if (root === null){
      console.log('inOrder Error');
    }
  }

  postOrder(root){
    if (root.left !== null){
      this.inOrder(root.left);
    }
    if (root.right !== null){
      this.inOrder(root.right);
    }
    console.log(root.value);
    if (root === null){
      console.log('postOrder Error');
    }
  }

  add(value){
    let newNode = new Node(this.value);

    if(this.root.left !== null){
      if(this.root.value === newNode.value){
        let tempValue = this.root.value;
        this.root.value = newNode.value;
        newNode.left = tempValue;
      } else {
        this.preOrder(this.root.left);
      }
    }
    if(this.root.right !== null){
      if(this.root.value === value){
        let tempValue = this.root.value;
        this.root.value = newNode.value;
        newNode.right = tempValue;
      } else {
        this.preOrder(this.root.right);
      }
    }

  }

  contains(value){
    let present = false;
    if(this.root.left !== null){
      if(this.root.value === value){
        present = true;
      } else {
        this.preOrder(this.root.left);
      }
    }
    if(this.root.right !== null){
      if(this.root.value === value){
        present = true;
      } else {
        this.preOrder(this.root.right);
      }
    }
    return present;

  }

  getMaximum(root, max){
    try{

      if (root.value > max){
        max = root.value;
      }
      if(root.left > max){

        max = this.getMaximum(root.left, max);
      }

      if(max < root.right){
        max = this.getMaximum(root.right, max);
      }

      return max;
    } catch(e){
      console.log('error');
    }
  }

  queueSearch(root){
    const queue = new Queue();
    queue.enqueue(root);
    const values = [];
    let currentTree = queue.dequeue();

    while (currentTree) {

      if (root.value.left){
        queue.enqueue(root.value.left);
      }
      if (root.value.right){
        queue.enqueue(root.value.right);
      }
    }
    return values;
  }

}

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    const newNode = new QueueNode(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;

    return this;
  }
  dequeue() {
    if (this.size === 0) return false;
    const dequeuedNode = this.first;

    const newFirst = this.first.next;

    if (!newFirst) {
      this.last = newFirst;
    }
    this.first = newFirst;
    dequeuedNode.next = null;
    this.size--;
    return dequeuedNode;
  }
}




module.exports = {
  Node: Node,
  Tree: Tree,
  QueueNode: QueueNode,
  Queue: Queue,
};


