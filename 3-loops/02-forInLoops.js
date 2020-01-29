/*

- great for counting key/value pairs in an object. Properties in an object 
are what is called enumerable
     - for in loops will iterae over an object's enumerble properties

*/

let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

console.log(student.degree);  // dot notation
// displays the keys

for (let item in student) {
    // console.log(item);
    console.log(student[item]);
}

let dogArray = ['great dane', 'husky', 'border collie', 'dalmation', 'pug'];

for (dog in dogArray) {
    console.log(dog);
    console.log(dogArray[dog]); // bracket notation
}

let name = "zACH";
let capName;


for (let i = 0; i < name.length; i++) {
    if (i == 0) {
        name = name[i].toUpperCase();
        console.log(spot);
        name[i] = spot;
    } else {
        spot = name[i].toLowerCase();
        name[i] = spot;
    }
}

console.log(name);

