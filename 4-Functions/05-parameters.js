/*



*/

function hi(name) {
    console.log(`Hello, ${name}!`);
}

hi("Bob");

function zach(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`);
}

zach('sandwich');

function counter(number) {
    for (let i = 0; i <= number; i++)
        console.log(i);
}

counter(1000);

function myName(fName, lName) {
    let fullName = fName + ' ' + lName;
    console.log(`Hello, my name is ${fullName}.`);
}

myName("Bob", "Madison");