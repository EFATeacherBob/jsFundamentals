
// (1)      (2)
let hi = () => {
    console.log("Hello!");
}

/*
    1. all fat arrow fxs need to be set to a variable.
    2. fat arow signifies this is a fx

    - arrow functions are the shorthand way of writing a fx expression
        - fat arrow functions do not get hoisted since they are fx expressions
    
*/ 
// concise body arrow function is on a single line.

let hi = () => console.log("Hello!"); // return is implicit and happens by default
hi();

// BLOCK body arrow fx we need to use the return.

let hi = () => {
    console.log("Hello!");
    // return keyword must be present inside of a block body arrow function
}

hi();

// Consice vs Block

let apples = num => console.log(`There are ${num} apples.`);
apples(10);

let counting = num => {
    for (let i = 0; i <= num; i++) {
        console.log(i);
    }
}
counting(20);

/*

 - if there are no params we have to have ()s
 - single param doesn't need ()s
 - > 1 param, have to have ()s

*/
