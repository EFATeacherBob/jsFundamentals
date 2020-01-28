/* 

booleans
    true or false

*/

let on = true;
console.log(on);

let off = false;
console.log(off);

/*

    - NULL
        - null is an empty value
        container: nothing is in it, but it still exists as a
        space to fill

*/

let empty = null;
console.log(empty);

/*

    undefined: no value has been assigned and not empty.

*/

let undef;
console.log(undef);

let correct;
console.log(correct);

/*

 - NULL container with nothing in it
 - undefined is a variable which has never been set, or hasn't
 been created yet.

*/

/*

   NUMBERS
       - numbers are literally just numbers. Don't need anything
       special to write them.

*/

let degrees = 33;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let decimal = 0.2 + 0.1;
console.log(decimal);

/*

   STRINGS
       - strings are dataatypes used to repreent text and are
       wrapped in either single or double quotes.

*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';

console.log(stringOne, stringTwo);

// numbers vs. strings

let first = 1050 + 100;
let second = '1050' + '100';

console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

/*

   OBJECTS
       - Store many values instead of a single value.
       - key value pairs

*/

let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true
}

console.log(frodo);
console.log(typeof frodo);

/*

    ARRAYS
        - Container which holds multiple values

*/

let burritos = ['large', 4, true];

console.log(burritos);

let firstName = "Bob";
let lastName = "Madison";
let houseNumber = 8829;
let street = "S. Tibbs Ave.";
let city = "Indianapolis";
let state = "IN";
let zipcode = 46217;

console.log(firstName, lastName);
console.log(houseNumber, street);
console.log(city + ", " + state + ' ' + zipcode);

/*

    STRING: PROPERTIES
        - properties are qualities associated with a specific datatype
        - strings have properties, or qualities that are associated
        specifically with strings.

*/

let myName = "Bob";
console.log(myName.length);

/*

    STRING: METHODS
        - methods are tools that can help us manipulate certain
        data
        - .property & .method()
            - no ()s for properties
*/

let myNameIs = "Robert";
console.log(myNameIs.toUpperCase());

let home = 'My home is Greenwood'
console.log(home.includes('Greenwood'));

let sent = "this sentence will be split into individual parts";
// console.log(sent.split(new RegExp1(' ')));
const words = sent.split(' ');
console.log(words);
