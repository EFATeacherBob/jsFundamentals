/*

for loops take in 3 parameters.
1. initial expression
2. condition
3. increment expression

*/
//       (1)      (2)    (3)
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// CHALLENGE: Using a for loop, count to 20, by 2's starting at 0.

for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

// Challenge: using a for loop, count rom 10 to 0, by 1

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

// Challenge: count from 0 to -24 by 2's.

for (let i = 0; i >= -24; i -= 2) {
    console.log(i);
}

//Challenge: print each character in a name.

let name = "Robert David Madison";

for (let i = 0; i < name.length; i++) {
    if (name[i] != " ") console.log(name[i]);
}

// add all numbers from 1 to 50

let sum = 0;

for (let i = 1; i <= 50; i++) {
    sum += i;
}

console.log(sum);

console.log((25 * (25 + 1)) / 2);