/*

    - JS is interpretted line by line from top to bottom and performs two passes of our code.
        -1st pass rcognizes we have declared variables and stores them in memory
            - looks at vr on the left of =
        -2nd pass assigns the values
    - NOTE: Variables and functions are hoisted
*/

console.log(name);
let name = "Bob";

b();

function b() {
    console.log('I have been hoisted');
}



