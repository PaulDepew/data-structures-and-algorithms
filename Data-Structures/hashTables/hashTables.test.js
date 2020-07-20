
'use strict';

const HashTable = require('./hashTables.js');

describe('Testing the creation of a hash Table', () => {
  it ('Should create a hashTable and place a Hash Key', () => {
    const testHashTable = new HashTable(1024);
    let hash = testHashTable.hashKey('Test');
    expect(hash).toBe(416);
    expect(hash).not.toBe(100);
  })

  it ('Should add an a value to our hash Key', () => {
    const testHashTable = new HashTable(1024);
    testHashTable.add('Test', 'test info');
    expect(testHashTable.contains('Test')).toEqual(true);
  })

  it ('Should retrieve a value with the hashed key', () => {
    const testHashTable = new HashTable(1024);
    testHashTable.add('Test', 'test info');
    expect(testHashTable.get('Test')).toEqual('test info');
  })

  it ('Should return a boolean if the hash key is present or not', () => {
    const testHashTable = new HashTable(1024);
    testHashTable.add('Test', 'test info');
    expect(testHashTable.contains('Test')).toEqual(true);
    expect(testHashTable.contains('Test2')).toEqual(false);
  })

});
