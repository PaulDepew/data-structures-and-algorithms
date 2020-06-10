'use strict';

/* Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index. */

// I can make this work with any built in method.... :'(

function insertShiftArray(array, value) {
  let mid = Math.floor(array.length/2);
  let arr = array;
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (i < mid) {
      newArr[i] = arr[i];
    } else if ( i === mid ) {
      newArr[i] = value;
      newArr[i + 1] = arr[i];
    } else if (i > mid) {
      newArr[i + 1] = arr[i];
    }
  }
  return newArr;
}


module.exports = insertShiftArray;