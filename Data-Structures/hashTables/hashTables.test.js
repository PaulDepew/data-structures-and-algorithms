
'use strict';

const HashTable = require('./hashTables.js');
const Finder = require('./findFirstRepeatedWord.js');

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

    it ('should return the first repeated word from a string', () => {
      let myString = 'Once upon a time, there was a brave princess who...';
      let myString2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
      let myString3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
      let myString4 = 'It is a beautiful day...';
      
      expect(Finder(myString)).toEqual('a');
      expect(Finder(myString2)).toEqual('it');
      expect(Finder(myString3)).toEqual('summer');
      expect(Finder(myString4)).toEqual('No repeated words');
    })

});
