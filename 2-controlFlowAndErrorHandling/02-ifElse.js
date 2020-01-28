let weather = 60;

if (weather < 50) {
    console.log("Wear jacket.");
} else {
    console.log("No jacket necessary.");
}

let name = "Bob"
if (name == "Bob") {
    console.log(name);
} else {
    console.log("Hello, what is your name.")
}

let name = "Bob"
if (name == "Robert") {
    console.log("Hello, my name is " + name);
} else {
    console.log("Hello, is you name <" + name + ">?");
}

// BRONZE

let name = 'zAchARy';

let firstLetter = name[0];

if (firstLetter >= 'A' && firstLetter <= 'Z') {
    console.log(name);
} else {
    console.log('Hey, this isn\'t written correctly.')
}

// SILVER

let name = 'zAchARy';

let firstLetter = name[0];

if (firstLetter >= 'A' && firstLetter <= 'Z') {
    console.log(name[0]);
} else {
    // let newName = name.substring(1, name.length).toLowerCase();
    console.log(name.substring(1, name.length).toLowerCase())
}

// GOLD

let name = 'zAchARy';

let firstLetter = name[0];

if (firstLetter >= 'A' && firstLetter <= 'Z') {
    console.log(name[0] + name.substring(1, name.length).toLowerCase());
} else {
    console.log(name[0].toUpperCase() + name.substring(1, name.length).toLowerCase())
}


let age = 23;

if (age >= 25) {
    console.log("You can rent a car!");
} else if (age >= 21) {
    console.log("You can drink!");
} else if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("Sorry, you're too young to do anything.");
}

