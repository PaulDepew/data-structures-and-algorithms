'use strict';

const HashTable = require('../hashTables/hashTables.js')



function leftJoin(leftHash, rightHash) {
  let newHash = []
  
  for (let i = 0; i < leftHash.keysArr.length; i++) {
    
    if(rightHash.keysObj[leftHash.keysArr[i]])  {
      test = [ leftHash.keysArr[i], leftHash.get(leftHash.keysArr[i]), rightHash.keysObj[leftHash.keysArr[i]] ]

      newHash.push(test);
    } 
    if(!rightHash.keysObj[leftHash.keysArr[i]])  {
      test = [ leftHash.keysArr[i], leftHash.get(leftHash.keysArr[i]), null ]

      newHash.push(test);
    }
  }
  return newHash
};


module.exports = leftJoin;