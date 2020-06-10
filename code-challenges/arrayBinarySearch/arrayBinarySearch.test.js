'use strict';

const binarySearch = require('./arrayBinarySearch.js');


describe('Testing Array code challenges', ()=> {
  it('Should insert a value into an array without using standard methods', () => {
    // here is where JS goes
    const testArray1 = [4,8,15,16,23,42];
    const testkey1 = 15;
    const binaryValue1 = binarySearch(testArray1, testkey1);

  
    expect(binaryValue1).toStrictEqual(2);

    const testArray2 = [11,22,33,44,55,66,77];
    const testKey2 = 90;
    const binaryValue2 = binarySearch(testArray2, testKey2);

   
    expect(binaryValue2).toStrictEqual(-1);
  });
});
