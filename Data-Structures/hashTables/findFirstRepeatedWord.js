'use strict';

const HashTable = require('./hashTables.js');


  function findFirstRepeatedWord(str) {


    let newString = str.replace(/[^a-zA-Z ]/g, '');
    
    
    let words = newString.split(' ');
    
    let hashMap = new HashTable(1024);
    
    let repeatedWord = 'No repeated words';
    
    for(let i = 0; i < words.length; i++) {
      let word = words[i].toLowerCase();
      let containsWord = hashMap.contains(word);
      
      if (containsWord === true) {
        repeatedWord = word;
        break;
      }
    
      if (containsWord === false) {
        hashMap.add(word, word);
      }
    }
    
    return repeatedWord;
    
    
    }

    module.exports = findFirstRepeatedWord;