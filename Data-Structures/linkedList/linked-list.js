'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

}

class LinkedList {
  constructor(){
    this.head =null;
  }

  traverse(){
    let current = this.head;

    while (current){
      console.log(current.value);
      current = current.next;
    }
  }

  insert(value){
    let insertNode = new Node(value);
    insertNode.next = this.head;
    this.head = insertNode;
    return this;
  }

  toString(){
    let current = this.head;
    while(current) {
      // displayList.push(current.value);
      console.log(`{${current.value}} -> `);
      current = current.next;
      if (!current){
        console.log('NULL');
      }
    }

  }

  include(value){
    let current = this.head;
    // console.log(current);
    let valid = false;

    while (current){
      if (current.value === value) {
        valid =true;
        break;
      } else {
        current = current.next;
        // this.traverse();
      }
    }
    return valid;
  }

  append(value){
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    this.insert(value);
    return this.head;
  }

  insertBefore(value, newVal){
    let current = this.head;
    let newNode = new Node(newVal);
    while (current.next){
      if (current.next.value === value) {
        newNode.next = current.next;
        current.next = newNode;

      }
      current = current.next;
    }
    return this;
  }
  insertAfter(value, newVal){
    let current = this.head;
    let newNode = new Node(newVal);
    while (current.next) {
      if (current.value === value) {
        let newNext = current.next;
        current.next = newNode;

        newNode.next = newNext;
        return this.head;
      }
      current = current.next;
    }
    return this;
  }

  deleteNode(value) {
    let current = this.head;
    while (current.next) {
      if (current.value === value) {
        current.next === current.next.next;
        return this;
      }
      current = current.next;
    }
    return this;
  }
}


module.exports = {
  Node,
  LinkedList,
};


// const linkedList = new LinkedList()
//   .insert('George')
//   .insert('HI Mom')
//   .insert('HI DAD')
//   .insert('Hi Hannah');
// console.log(linkedList.include('George'));

// linkedList.head = firstNode;
// linkedList.head.next = secondNode;
// linkedList.head.next.next = thirdNode;

// linkedList.insert('George');

// console.log(linkedList);
// linkedList.toString();

