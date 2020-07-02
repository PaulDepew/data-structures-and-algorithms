'use strict';


let fizzBuzz = function(tree) {
  fizzbuzzSearch(this.root);

  function fizzbuzzSearch(node){
    if(!node){
      return null;
    }
    else if(node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = 'Fizzbuzz';
    }
    else if (node.value % 5 === 0) {
      node.value = 'buzz';
    }
    else if (node.value % 3 === 0) {
      node.value = 'Fizz';
    }
    fizzbuzzSearch(node.left);
    fizzbuzzSearch(node.right);
  }
};

class Node {
  constructor(value){
    this.value = value;
    this.left = this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    var result = [];
    preOrderVisit(this.root);
    return result;

    function preOrderVisit(node) {
      if(!node){
        return;
      }
      result.push(node.value);
      preOrderVisit(node.left);
      preOrderVisit(node.right);
    }
  }

  inOrder() {
    var result = [];
    inOrderVisit(this.root);
    return result;

    function inOrderVisit(node){
      if(!node) {
        return;
      }
      inOrderVisit(node.left);
      result.push(node.value);
      inOrderVisit(node.right);
    };
  }

  postOrder() {
    var result = [];
    postOrderVisit(this.root);
    return result;

    function postOrderVisit(node) {
      if(!node) {
        return;
      }
      postOrderVisit(node.left);
      postOrderVisit(node.right);
      result.push(node.value);
    };
  }

};

module.exports = {BinaryTree: BinaryTree, fizzBuzz: fizzBuzz, Node:Node};

