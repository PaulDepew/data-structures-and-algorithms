'use strict';

const quickSort = require('./quickSort.js');

describe('Testing quickSort', () => {
  it ('should return the array sorted in the correct order', () => {
    let array = [8,4,23,42,16,15];
    let sorted = quickSort(array);
    let test = [ 4, 8, 15, 16, 23, 42 ];
    expect(sorted).toEqual(test);
  
  });
});
