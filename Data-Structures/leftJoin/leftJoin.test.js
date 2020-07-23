'use strict';

const HashTable = require('../hashTables/hashTables')
const leftJoin = require('./leftJoin.js')

const left = new HashTable(1024)
const right = new HashTable(1024)

left.add("fond", "enamored")
left.add("wrath", "anger")
left.add("diligent", "employed")
left.add("guide", "usher")
left.add("Seahawks", "BEST TEAM EVER")
left.add("bargain", "pact")
left.add("shitty", "terrible")
left.add("asshole", "Garhett Morgan")

right.add("fond", "shmammered")
right.add("wrath", "ice cream")
right.add("diligent", "lazy")
right.add("flow", "jam")
right.add("guide", "lost in the sauce")
right.add("bargain", "ripped-off")
right.add("shitty", "perfect")
right.add("asshole", "Garhett Morgan")


describe('This test will test your hashmapping skills.', () => {

  it(
    'Write a function that LEFT JOINs two hashmaps into a single data structure', () => {


      expect(leftJoin(left, right)).toStrictEqual(
        [
          ['fond', 'enamored', 'shmammered'],
          ['wrath', 'anger', 'ice cream'],
          ['diligent', 'employed', 'lazy'],
          ['guide', 'usher', 'lost in the sauce'],
          ['Seahawks', 'BEST TEAM EVER', null],
          ['bargain', 'pact', 'ripped-off'],
          ['shitty', 'terrible', 'perfect'],
          ['asshole', 'Garhett Morgan', 'Garhett Morgan']
        ])
    })
})