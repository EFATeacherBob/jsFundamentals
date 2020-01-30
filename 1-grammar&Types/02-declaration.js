/*
   - a variable is a named container for storing data
   - we name variables so we can refer to them again
*/

let a = 2;
// comment
    let    b     =     1;
/*   (1)  (2)   (3)   (4)

  1. JavaScript keyword
  2. variable name
  3. assignment operator
  4. value

*/

console.log(a + b);

/*

   notes on variables:
       - a variable name must begin with a letter, underscore, or 
       dollar sign
       - numbers may follow the above characters, but they can't
       come first
       - JavaScript i case sensitive = 'hello' and 'Hello' are two
       different vaiables
       - no spaces allowed in variable names.
       - camelCase: 1st word is lower case and rest are upper case
       with multiple words
        - this helps with readability
    
*/

/*
    var, let, const:

        - var: 'old' keyword for variables in JS
        - let: 'new' keyword keyword for variables in ES6
        (newer version of JavaScript)
        - const: unchangeable variable once declared

*/

/*
    declarations vs initialization

        - declarations are on th LEFT SIDE of a variable
           - let x
           - declarations are on the left side of the asignment
           operator (=)
        - initializations are the RIGHT SIDE of the variable
           - it sets the value of the vaiable
           - the value we initialize our variables as is what is
           on the right side of the (=)
*/

let x;
console.log('Declaration: ', x); // declaration undefined.


console.log('Inititalization: ', x = 10);
console.log('Reinititalization: ', x = 100);
