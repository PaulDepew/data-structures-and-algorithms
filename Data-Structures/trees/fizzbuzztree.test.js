'use strict';
const fizzBuzz = require('./fizzbuzztree');

function testTree() {

  var tree = new fizzBuzz.BinaryTree();

  tree.root = new fizzBuzz.Node('5');
  tree.root.left = new fizzBuzz.Node('10');
  tree.root.right = new fizzBuzz.Node('12');
  tree.root.left.left = new fizzBuzz.Node('3');
  tree.root.left.right = new fizzBuzz.Node('donkey');
  tree.root.right.left = new fizzBuzz.Node('15');

  return tree;
}

describe('fizzbuzz tree', () => {

  it('will return null for an empty tree', () => {
    let tree = testTree();
    expect(fizzBuzz.fizzBuzz(tree)).toBe(null);
  });

  it('will return null when given a parameter that is not a tree', () => {
    let tree = 'donkey';
    expect(fizzBuzz.fizzBuzz(tree)).toBe(null);
  });
});
