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


