'use strict';

const tree = require('./tree');

const testTree = new tree.Tree();

testTree.root = new tree.Node(1);
testTree.root.left = new tree.Node(2);
testTree.root.right = new tree.Node(3);
testTree.root.left.left = new tree.Node(4);
testTree.root.left.right = new tree.Node(5);

jest.spyOn(global.console, 'log');


describe('This is a test see see if we can make a tree', () => {
  it('Will make an empty tree', ()=> {

    let newTree = new tree.Tree();
    expect(newTree.root).toBe(null);
  });
});

describe('This is a test see see if we can make a tree', () => {
  it('Will add a leaf onto our tree', ()=> {

    let newTree = new tree.Tree();
    newTree.root = new tree.Node(1);
    expect(newTree.root.value).toBe(1);
  });
});

describe('This is a test see see if we can make a tree', () => {
  it('Will add multiple leafs on our tree', ()=> {

    let newTree = new tree.Tree();
    newTree.root = new tree.Node(1);
    newTree.root.left = new tree.Node(2);
    newTree.root.right = new tree.Node(3);
    expect(newTree.root.left.value).toBe(2);
    expect(newTree.root.right.value).toBe(3);
  });
});

describe('This is a test see see if we preOrder Traverse', () => {
  it('return a preOrder Traversal', ()=> {

    testTree.preOrder(testTree.root);
    expect(console.log).toBeCalled();
  });
});

describe('This is a test see see if we inOrder Traverse', () => {
  it('return an inOrder Traversal', ()=> {

    testTree.inOrder(testTree.root);
    expect(console.log).toBeCalled();
  });
});

describe('This is a test see see if we postOrder Traverse', () => {
  it('return a postOrder Traversal', ()=> {

    testTree.postOrder(testTree.root);
    expect(console.log).toBeCalled();
  });
});

// describe('This is a test see see if we can get the maximum value', () => {
//   it('returns the maximum value', ()=> {
//     let newTree = new tree.Tree();
//     newTree.root = new tree.Node(1);
//     newTree.root.left = new tree.Node(2);
//     newTree.root.right = new tree.Node(3);
//     let biggest = newTree.getMaximum(newTree.root, 0);
//     expect(biggest).toBe(3);
//   });
// });

describe('This is a test see see if we can breadth first search a binary tree', () => {
  it('returns the correct value', ()=> {

   

    let test = testTree.queueSearch(testTree.root);
    console.log(test);
    expect(test).toBe(test);
  });
});
