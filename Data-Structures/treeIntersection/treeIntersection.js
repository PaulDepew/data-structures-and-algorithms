'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.allValArr = [];
    this.allValObj = {};
  }

  preOrder(root)  {
    this.allValArr.push(root.value);
    this.allValObj[root.value] = 'match';
    if(root.left !== null)  {
      this.preOrder(root.left);
    }
    if(root.right !== null)  {
      this.preOrder(root.right);
    }
  }
}

function treeIntersection(treeA, treeB) {
  treeA.preOrder(treeA.root);
  treeB.preOrder(treeB.root);

    let checkArray = [...treeA.allValArr];
    let checkObject = {...treeB.allValObj};

  let values = [];
  let valid = false;

  for(let i =0; i< checkArray.length; i++){
    if(checkObject[checkArray[i]] === 'match') {
      valid = true;
      values.push(checkArray[i]);
    }

  if(valid === false){
    return 'No Matches'
  } else {
    return values;
  }
  }
};

module.exports = {
  Node,
  BinaryTree,
  treeIntersection,
}