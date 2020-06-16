'use strict';

let linkedList = require('./linked-list');

describe('Testing the List Instantiation', () => {
  it('should return an empty linkedList', () => {
    let list = new linkedList.LinkedList();
    expect(list.head).toBe(null);
  });
});

describe('Testing if I can properly insert into the list', () => {
  it('should return a new head object', () => {
    let list = new linkedList.LinkedList();
    list.insert('George');
    expect(list.head.value).toBe('George');
  });
});

describe('Testing that the head property always points to the first instance in the list', () => {
  it('should return the first item in the list', () => {
    let list = new linkedList.LinkedList();
    list.insert('George');
    list.insert('Hi Mom');
    expect(list.head.value).toBe('Hi Mom');
  });
});

describe('Testing that we can properly insert nodes into the list', () => {
  it('should return ann array that matches the values inserted', () => {
    let list = new linkedList.LinkedList();
    list.insert('George');
    list.insert('Hi Mom');
    list.insert('hi Dad');
    
    expect(list.head.value).toBe('hi Dad');
  });
});

describe('Testing that we can search for a value in the list', () => {
  it('should return true if value is found', () => {
    let list = new linkedList.LinkedList();
    list.insert('George');
    list.insert('Hi Mom');
    list.insert('hi Dad');
    
    
    expect(list.include('Hi Mom')).toBe(true);
  });
});

describe('Testing that we can return a list of the notes found', () => {
  it('should return a console log of the items', () => {
    let list = new linkedList.LinkedList();
    list.insert('George');
    list.insert('Hi Mom');
    list.insert('hi Dad');
    let results = list.toString(list);
    
    expect(list.toString(list)).toBe(results);
  });
});

describe('Testing that we can add a note to the end of a list', () => {
  it('should return add a note to the end of the list', () => {
    let list = new linkedList.LinkedList();
    list.insert('George');
    list.insert('Hi Mom');
    list.append('hi Dad');

    expect(list.head.value).toBe('hi Dad');
  });
});

describe('Testing that we can add multiple nodes to the end of the list', () => {
  it('should return the last two notes added to the list', () => {
    let list = new linkedList.LinkedList();
    list.insert('George');
    list.insert('Hi Mom');
    list.append('hi Dad');
    list.append('ME?');

    expect(list.head.value).toBe('ME?');
    expect(list.head.next.value).toBe('hi Dad');
  });
});

// describe('Testing that we can insert a node before the first node', () => {
//   it('should return the note placed infront of the previous', () => {
//     let list = new linkedList.LinkedList();
//     list.insert('George');
//     list.insert('Hi Mom');
//     list.insert('hi Dad');
//     list.insertBefore('hi Dad', 'test');
//     console.log(list.head);

//     expect(list.head.value).toBe('test');
    
//   });
// });

describe('Testing that we can insert a node in the middle of the list', () => {
  it('should return the note in the middle of the lsit', () => {
    let list = new linkedList.LinkedList();
    list.insert('George');
    list.insert('Hi Mom');
    list.insert('hi Dad');
    list.insertAfter('Hi Mom', 'test');
    // console.log(list.head.next.next.value);

    expect(list.head.next.next.value).toBe('test');
  });
});

// describe('Testing that we can insert a node at the end of the list', () => {
//   it('should return the note at the end of the list', () => {
//     let list = new linkedList.LinkedList();
//     list.insert('George');
//     list.insert('Hi Mom');
//     list.insert('hi Dad');
//     list.insertAfter('George', 'test');
//     console.log(list.head.next.next);

//     expect(list.head.next.next.next.value).toEqual('test');
    
//   });
// });

