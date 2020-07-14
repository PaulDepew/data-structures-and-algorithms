'use strict';

const insertSort = require('./insertionSort.js');


describe('This should sort an array with insertion methods', ()=> {
  it('should return a sorted array', ()=> {

    let array = [8,4,23,42,16,15];
    let sorted = insertSort(array);

    expect(sorted).toStrictEqual([4,8,15,16,23,42]);
  });
});

