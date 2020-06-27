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
}



module.exports = {
  Node: Node,
  Tree: Tree,
}

