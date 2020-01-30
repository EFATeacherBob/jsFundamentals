/*
    - arrays a ontiners that hold a list of item
    - denoted by square brackets []
    - can hold mulitple datatypes
    - each item is going to be separated by commas
*/

let list = ['orange', 'banana', 'apple'];
console.log(list[1]);

/*
    - when calling an array, we can append square brackets onto the end of our
    array name with the index # we want to refer to. Square Bracket notation
    - JavaScript indices begin at 0.

*/

let students = ['Matt', 'Bob', 'Jeff', 'AB', 23, true, ['Kris', 'Taylor', 'Will']];

// console.log(typeof students);
console.log(students instanceof Array); // instanceof is used to check the type at runtime.

/*
CHALLENGE
*****************

    - dive into the nested array and pull the value 'Will'
    - print "Hello, Will!"

*/

console.log("Hello, " + students[6][2] + "!");
