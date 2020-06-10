  
'use strict';

const arrayShift = require('./array-shift.js');


describe('Testing Array code challenges', ()=> {
  it('Should insert a value into an array without using standard methods', () => {
    // here is where JS goes
    const testArray1 = [2,4,6,8];
    const testValue1 = 5;
    const shiftArray1 = arrayShift(testArray1, testValue1);

    // expect(shiftArray1).not.toStrictEqual(testArray1);
    expect(shiftArray1).toStrictEqual([2,4,5,6,8]);

    // const testArray2 = [4,8,15,23,42];
    // const testValue2 = 16;
    // const shiftArray2 = arrayShift(testArray2, testValue2);

    // // expect(shiftArray2).not.toStrictEqual(testArray2);
    // expect(shiftArray2).toStrictEqual([4,8,15,16,23,42]);

  });
})