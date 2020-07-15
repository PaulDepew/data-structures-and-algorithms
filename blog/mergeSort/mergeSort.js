
'use strict';

function mergeSort(arr) {
  //You do not have to sort the array if it is less than 1 element
  if(arr.length <= 1) {
    return arr;
  }

  //Find the middle of the array
  const middle = Math.floor(arr.length/2);

  //Slice into the left and right array
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);

}

function merge(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
      continue;
    }
    result.push(right.shift());
  }
  if (left.length > 0) {
    return result.concat(left);
  }
  return result.concat(right);
}

module.exports = mergeSort;
