'use strict';

/* Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index. */

// I can make this work with any built in method.... :'(

function insertShiftArray(array, value) {
  // let newArray = [...array];
  let middle = Math.ceil(array.length/2);

  for (let i = 0; i <= array.length; i++) {
    if (i === middle) {
      [...array, value];
    }
  }
  console.log(array);
  // array[array.length/2] = value;
  return array;
}


module.exports = insertShiftArray;