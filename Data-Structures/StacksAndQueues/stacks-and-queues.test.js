'use strict';

const Stack = require('./stacks-and-queues');

describe( 'To test if we can push onto a stack', () => {
  it('Should return true', ()=> {

    let testStack = new Stack.Stack();
    testStack.push('test');
    expect(testStack.isEmpty()).toBe(true);
  });
});

describe( 'To test if we can push multiple nodes into a stack', () => {
  it('Should return the value of the Node', ()=> {

    let testStack = new Stack.Stack();
    testStack.push('test');
    testStack.push('second test');
    expect(testStack.top.next.value).toBe( 'test' );
  });
});

describe( 'To test if we can pop a node off of a stack', () => {
  it('Should return the count of the list', ()=> {

    let testStack = new Stack.Stack();
    testStack.push('test');
    testStack.push('second test');
    testStack.pop();

    expect(testStack.counter).toBe( 1 );
  });
});

describe( 'To test if we can pop multiple nodes off of a stack', () => {
  it('Should return the count of the list', ()=> {

    let testStack = new Stack.Stack();
    testStack.push('test');
    testStack.push('second test');
    testStack.pop();
    testStack.pop();
    expect(testStack.counter).toBe( 0 );
  });
});

describe( 'To test if we can peek into a stack', () => {
  it('Should return the value of the top', ()=> {

    let testStack = new Stack.Stack();
    testStack.push('test');
    testStack.push('second test');
    expect(testStack.peek()).toBe( testStack.top );
  });
});


describe( 'To test if we can Enqueue into a queue', () => {
  it('Should return the value of the top', ()=> {

    let testQueue = new Stack.Queue();
    testQueue.enqueue('test');
    expect(testQueue.front.value).toBe( 'test' );
  });
});

describe( 'To test if we can Enqueue multiple nodes into a queue', () => {
  it('Should return the value of the last node', ()=> {

    let testQueue = new Stack.Queue();
    testQueue.enqueue('test');
    testQueue.enqueue('second test');
    expect(testQueue.rear.value).toBe( 'second test' );
  });
});

describe( 'To test if we can Dequeue a node out of a queue', () => {
  it('Should return the value of the first node', ()=> {

    let testQueue = new Stack.Queue();
    testQueue.enqueue('second test');
    testQueue.enqueue('test');
    testQueue.dequeue();
    expect(testQueue.front.value).toBe( 'test' );
  });
});

describe( 'To test if we can Dequeue multiple nodes out of a queue', () => {
  it('Should return the value of the first node', ()=> {

    let testQueue = new Stack.Queue();
    testQueue.enqueue('second test');
    testQueue.enqueue('test');
    testQueue.dequeue();
    testQueue.dequeue();
    expect(testQueue.front).toBe( null );
  });
});

describe( 'To test if we can peek our queue', () => {
  it('Should return the value of the first node', ()=> {

    let testQueue = new Stack.Queue();
    testQueue.enqueue('second test');
    testQueue.enqueue('test');
    expect(testQueue.front.value).toBe( 'second test' );
  });
});

describe( 'To test if we can isEmpty our queue', () => {
  it('Should return a boolean value', ()=> {

    let testQueue = new Stack.Queue();
    testQueue.enqueue('second test');
    testQueue.enqueue('test');
    expect(testQueue.isEmpty()).toBe( true );
  });
});

describe( 'To test our enqueue(value) method', () => {
  it('Should return the correct output', ()=> {

    let testQueue = new Stack.PseudoQueue();
    testQueue.enqueue('20');
    testQueue.enqueue('15');
    testQueue.enqueue('10');
    testQueue.enqueue('5');
    expect(testQueue.rear.value).toBe('5');
  });
});

describe( 'To test our enqueue(value) method on an empty PsuedoQueue', () => {
  it('Should return the correct output', ()=> {

    let testQueue = new Stack.PseudoQueue();

    testQueue.enqueue('5');
    expect(testQueue.front.value).toBe('5');
  });
});

describe( 'To test our dequeue(value) method', () => {
  it('Should return the correct output', ()=> {

    let testQueue = new Stack.PseudoQueue();
    testQueue.enqueue('20');
    testQueue.enqueue('15');
    testQueue.enqueue('10');
    testQueue.enqueue('5');
    testQueue.dequeue();
    expect(testQueue.front.value).toBe('15');
  });
});

describe( 'To test our dequeue(value) method', () => {
  it('Should return the correct output', ()=> {

    let testQueue = new Stack.PseudoQueue();

    testQueue.enqueue('15');
    testQueue.enqueue('10');
    testQueue.enqueue('5');
    testQueue.dequeue();
    // console.log(testQueue);
    expect(testQueue.front.value).toBe('10');
  });
});

describe( 'We can enqueue animals to our AnimalShelter', () => {
  it('Should return the correct output', ()=> {

    let testQueue = new Stack.AnimalShelter();

    testQueue.enqueue('dog');
    testQueue.enqueue('cat');
    testQueue.enqueue('dog');
    
    expect(testQueue.front.value).toBe('dog');
  });
});

describe( 'We can dequeue animals out of our AnimalShelter', () => {
  it('Should return null because it is not a cat or dog', ()=> {

    let testQueue = new Stack.AnimalShelter();

    testQueue.enqueue('dog');
    testQueue.enqueue('bird');
    testQueue.enqueue('cat');
    testQueue.dequeue();

    expect(testQueue.dequeue()).toBe(null);
  });
});
