let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true
}

let person2 = {
    name: 'Jeremy',
    age: 15,
    canVote: false
}

let person3 = {
    name: 'Tyler',
    age: 33,
    canVote: true
}

// (1)      (2)       (3)
function Person(name, age, canVote) {
//  (4)    (5)    (6)
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}
//            (7)    (8)
let person4 = new Person("Bob", 70, true);
let person5 = new Person("Doug", 32, true);
console.log(person4);
console.log(person5);

/*

 1. function keyword
 2. function name (capped for constructor functions.)
 3. parameters (three of them) for a new person.
 4. this keyword and refers to whatever called it, or whatever activates it.
    refers back to 'Person.'
 5. Keys for the objects.
 6. Parameters assigned to the keys.
 7 & 8. new calls the constructor function person and creates a new instance of Person.


 */