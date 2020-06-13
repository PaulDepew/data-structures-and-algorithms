# Author: Paul Depew

# Singly Linked List
When creating a linked list, how can we test the traverse, add, and find functions.

## Challenge

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
- Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
- Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
- Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
- Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"

## Approach & Efficiency
1. We must build a Node Object containing a value and next value of null
2. We must build a list and assign a null header
3. We then figure out how to traverse through the list so we have full access
4. We then figure out how to insert a new node into the head space using the this.head value
5. We then figure a method on how to compare the values of the node to the searched value and return a boolean value
6. Finally, we need to be able to log all of our node objects in the console so that we are aware of what we have

## API
node start linked-list.js
  - This will intiate the linked-list.js page
node test linked-list.test.js
  - This will run the error testing for the linked-list.js