/*

- a ternary is a shortcut for writing an if/else statement.
- requires the default or catch all else

*/

let num = 6;

// Ternary

num > 0 ? console.log('yes') : console.log('no');

// if/else

if (num > 0) {
    console.log('yes');
} else {
    console.log('no');
}

let num = 0;

// Ternary

num == 0 ? console.log('working') : num < 0 ? console.log('not working') : console.log('still not working');

// if/else

if (num == 0) {
    console.log('working');
} else if (num < 0) {
    console.log('not working');
} else {
    console.log('still not working')
}

// Challenge

let age = 16;

age >= 25 ? console.log("Yay! You can rent a car!")
          : age >= 21 ? console.log("Yay! You can drink!")
          : age >= 18 ? console.log("Yay! You can vote!")
          : console.log("Sorry, you're too young to do anything fun");