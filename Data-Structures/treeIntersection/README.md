### Author: Paul Depew

# Tree Intersection
How do we find the interesting point of trees?

## Challenge

- Write a function called tree_intersection that takes two binary tree parameters.
- Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.

## Approach & Efficiency
1. We must build a binary tree
2. We must spread insert them into iterable objects
3. We then traverse through the iterables checking the values
4. We watch for a collision, if that happens, we return. 

## API
node test 
  - This will run the error testing 