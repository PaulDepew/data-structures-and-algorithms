'use strict';

class HashTable{
  constructor(size){
    this.size = size;
    this.buckets = new Array(size);
  }

    hashKey(key){
      let characters = key.split('');
      let hashSum = characters.reduce((total, char) => {
        return total + char.charCodeAt(0);
      }, 0) * 929;
      let hashedIndex = hashSum % this.size;
      return hashedIndex;
    }
    
    add(key, value){
      let index = this.hashKey(key);
      if (!this.buckets[index]){
        this.buckets[index] = new LinkedList();
      }

      let entry = { [key]: value}

      this.buckets[index].add(entry);
    }

    get(key){
      let index = this.hashKey(key);
    let bucket = this.buckets[index];

    if(!bucket) {
      return null;
    };

    let current = bucket.head;
      while(current) {
        let itemKey = Object.keys(current.value);
        let itemVal = Object.values(current.value);
        if (key === itemKey[0]){
          return itemVal[0];
        }
        current = current.next;     
      }
      return null;
    }

    contains(key){
    let index = this.hashKey(key);
    let bucket = this.buckets[index];

    if(!bucket) {
      return false;
    };

    let current = bucket.head;
      while(current) {
        let item = Object.keys(current.value);
        if (key === item[0]){
          return true;
        }
        current = current.next;     
      }
      return false;
    }
}



/*
  Node and Linked List classes for use within hash structures
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

module.exports = HashTable;