'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class Stack {

  constructor(value){
    this.top = null;
    this.counter = 0;
  }

  peek(){
    return this.top ? this.top : null;
  }

  push(value){
    let pushNode = new Node(value);
    pushNode.next = this.top;
    this.top = pushNode;
    this.counter += 1;
  }

  pop(){
    let tempTop = this.top;
    if (top.next !== null) {
      this.top = this.top.next;
      this.counter -= 1;
    } else {
      this.counter -= 1;
      return tempTop;
    }
  }

  isEmpty(){
    return !!this.top;
  }
}


class Queue {
  constructor(value){
    this.front = null;
    this.counter = 0;
  }

  enqueue(value){
    let newNode = new Node(value);
    
    if (this.front === null){
      this.front = newNode;
      this.rear = newNode;
      this.counter =+ 1;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
      this.counter =+ 1;
    }

  }

  dequeue(){

    if (this.front === null){
      this.counter = 0;
      this.rear = null;
      return;
    } else {
      this.counter =- 1;
      let tempFront = this.front;
      this.front = this.front.next;
      this.rear = tempFront.next;
      tempFront.next = null;
      return tempFront;
    }
  }

  peek(){
    return this.front ? this.front : null;
  }
  isEmpty(){
    return !!this.front;
  }
}

class PseudoQueue {
  constructor(value){
    this.front = null;
    this.counter = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    
    if (this.front === null){
      this.front = newNode;
      this.rear = newNode;
      this.counter =+ 1;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
      this.counter =+ 1;
    }
  }

  dequeue(){

    if (this.front === null){
      this.counter = 0;
      this.rear = null;
      return;
    } else {
      this.counter =- 1;
      let tempFront = this.front;
      this.front = this.front.next;
      this.rear = tempFront.next;
      tempFront.next = null;
      return tempFront;
    }
  }
}

class AnimalShelter{
  constructor(value){
    this.front = null;
    this.counter = 0;
  }

  enqueue(animal){
    let newNode = new Node(animal);
    
    if (this.front === null){
      this.front = newNode;
      this.rear = newNode;
      this.counter =+ 1;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
      this.counter =+ 1;
    }
  }
  dequeue(pref){
    if(this.front === null){
      this.counter = 0;
      this.rear = null;
      return pref = null;
    } else if(this.front.value === 'dog'){
      this.counter -=1;
      let tempFront = this.front;
      this.front = this.front.next;
      this.rear = tempFront.next;
      tempFront.next = null;
      return 'dog';
    } else if(this.front.value === 'cat'){
      this.counter -=1;
      let tempFront = this.front;
      this.front = this.front.next;
      this.rear = tempFront.next;
      tempFront.next = null;
      return 'cat';
    } else {
      return pref = null;
    }
  }
}

module.exports = {
  AnimalShelter: AnimalShelter,
  Stack: Stack,
  Queue: Queue,
  PseudoQueue: PseudoQueue,
};
