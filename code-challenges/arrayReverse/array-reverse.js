'use strict';

function reverseArray(array) {
  var i = array.length -1;
  let reversed = [];
  for (i; i>= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

module.exports = reverseArray;
